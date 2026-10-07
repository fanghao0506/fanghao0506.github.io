"""Build the TimeSilhouette gallery.

Drop photos into ./photos, then run `python build.py` (or just push: the
GitHub Action runs it for you). It will:
  - make web-sized copies in ./gallery (only for new photos)
  - remove copies of photos that were deleted
  - write the photo grid into index.html

Newest additions are shown first; photos added together keep filename order.
"""
import datetime, hashlib, html, json, re
from pathlib import Path

from PIL import Image, ImageOps

try:  # iPhone HEIC support, optional
    from pillow_heif import register_heif_opener
    register_heif_opener()
except ImportError:
    pass

ROOT = Path(__file__).resolve().parent
SRC, OUT, PAGE = ROOT / "photos", ROOT / "gallery", ROOT / "index.html"
MANIFEST = OUT / "manifest.json"
EXTS = {".jpg", ".jpeg", ".png", ".webp", ".heic", ".heif", ".tif", ".tiff"}
SIZES = {"s": (1280, 800), "l": (2560, 1600)}  # grid / viewer, fit within box
QUALITY = {"s": 78, "l": 84}
EAGER = 6  # first N grid images load immediately


def natural_key(name):
    return [int(t) if t.isdigit() else t.lower() for t in re.split(r"(\d+)", name)]


def file_hash(path):
    h = hashlib.sha1()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()[:12]


def exif_info(im):
    """Camera details as display text, '' if the photo carries none."""
    try:
        ex = im.getexif()
        sub = ex.get_ifd(0x8769)
    except Exception:
        return "", ""

    def num(v):
        try:
            return float(v)
        except (TypeError, ValueError, ZeroDivisionError):
            return None

    parts = []
    model = str(ex.get(0x0110) or "").strip().strip("\x00")
    lens = str(sub.get(0xA434) or "").strip().strip("\x00")
    if model:
        parts.append(model)
    if lens and lens not in model:
        parts.append(lens)
    focal, fnum, exp, iso = (num(sub.get(t)) for t in (0x920A, 0x829D, 0x829A, 0x8827))
    if focal:
        parts.append(f"{focal:g}mm")
    if fnum:
        parts.append(f"ƒ/{fnum:g}")
    if exp:
        parts.append(f"1/{round(1 / exp)}s" if exp < 1 else f"{exp:g}s")
    if iso:
        parts.append(f"ISO {iso:g}")
    date = str(sub.get(0x9003) or ex.get(0x0132) or "")
    date = date[:10].replace(":", "-") if re.match(r"\d{4}:\d\d:\d\d", date) else ""
    return " · ".join(parts), date


def process(path, pid):
    with Image.open(path) as im:
        exif, date = exif_info(im)
        icc = im.info.get("icc_profile")
        im = ImageOps.exif_transpose(im).convert("RGB")
        w, h = im.size
        color = "#%02x%02x%02x" % im.resize((1, 1), Image.BOX).getpixel((0, 0))
        files = {}
        for key, (bw, bh) in SIZES.items():
            scale = min(1, bw / w, bh / h) if w >= h else min(1, bh / w, bw / h)
            out = im if scale == 1 else im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
            name = f"{pid}-{key}.webp"
            out.save(OUT / name, "WEBP", quality=QUALITY[key], method=6, icc_profile=icc)
            files[key] = [name, *out.size]
    return {"w": w, "h": h, "color": color, "exif": exif, "date": date, **files}


def render(photos):
    rows = []
    for i, p in enumerate(photos):
        s, l = p["s"], p["l"]
        ar = p["w"] / p["h"]
        load = 'loading="eager" fetchpriority="high"' if i < EAGER else 'loading="lazy"'
        data = f' data-exif="{html.escape(p["exif"])}"' if p["exif"] else ""
        data += f' data-date="{p["date"]}"' if p["date"] else ""
        rows.append(
            f'<a href="gallery/{l[0]}" id="{p["id"]}" style="--ar:{ar:.4f};--c:{p["color"]}"{data}>'
            f'<img src="gallery/{s[0]}" width="{s[1]}" height="{s[2]}" '
            f'alt="Photograph {i + 1}" {load} decoding="async"></a>'
        )
    return "\n".join(rows)


def main():
    OUT.mkdir(exist_ok=True)
    old = json.loads(MANIFEST.read_text("utf-8")) if MANIFEST.exists() else {}
    today = datetime.date.today().isoformat()
    sources = sorted((p for p in SRC.iterdir() if p.suffix.lower() in EXTS), key=lambda p: natural_key(p.name))

    photos, seen = [], set()
    for path in sources:
        pid = file_hash(path)
        if pid in seen:
            continue
        seen.add(pid)
        entry = old.get(pid)
        if not entry or not all((OUT / entry[k][0]).exists() for k in SIZES):
            print("+", path.name)
            entry = {**process(path, pid), "added": entry["added"] if entry else today}
        photos.append({**entry, "id": pid, "src": path.name})

    # Newest first; stable sort keeps filename order within the same day.
    photos.sort(key=lambda p: p["added"], reverse=True)

    keep = {p[k][0] for p in photos for k in SIZES} | {MANIFEST.name}
    for f in OUT.iterdir():
        if f.name not in keep:
            print("-", f.name)
            f.unlink()

    MANIFEST.write_text(json.dumps({p["id"]: {k: v for k, v in p.items() if k != "id"} for p in photos},
                                   ensure_ascii=False, indent=1), "utf-8")
    page = PAGE.read_text("utf-8")
    page = re.sub(r"(<!-- GALLERY -->).*?(<!-- /GALLERY -->)",
                  lambda m: f"{m[1]}\n{render(photos)}\n{m[2]}", page, flags=re.S)
    page = re.sub(r"(<!-- COUNT -->).*?(<!-- /COUNT -->)", rf"\g<1>{len(photos)}\g<2>", page)
    PAGE.write_text(page, "utf-8", newline="\n")
    print(f"{len(photos)} photos")


if __name__ == "__main__":
    main()
