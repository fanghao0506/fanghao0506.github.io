// 我的收藏 — add a bookmark by adding one line: { zh: "中文名", en: "English name", url: "https://..." }
// Optional `tags` are searchable and shown on hover.
// Relative urls (e.g. "currency.html") point to pages in this folder.
const COLLECTION = [
  {
    zh: "AI 助手", en: "AI Assistants",
    links: [
      { zh: "ChatGPT", en: "ChatGPT", url: "https://chatgpt.com/chat" },
      { zh: "Claude", en: "Claude", url: "https://claude.ai/new" },
      { zh: "Gemini", en: "Gemini", url: "https://gemini.google.com/u/1/app?pageId=none" },
      { zh: "豆包", en: "Doubao", url: "https://www.doubao.com/chat/" },
    ],
  },
  {
    zh: "学术写作", en: "Academic",
    links: [
      { zh: "谷歌学术", en: "Google Scholar", url: "https://scholar.google.com" },
      { zh: "Letpub", en: "Letpub", url: "https://www.letpub.com.cn/index.php?page=journalapp" },
      { zh: "谷歌专利", en: "Google Patents", url: "https://patents.google.com/" },
      { zh: "谷歌翻译", en: "Google Translate", url: "https://translate.google.com/?hl=zh-CN" },
      { zh: "QuillBot 改写", en: "QuillBot", url: "https://quillbot.com/" },
      { zh: "学术语料库", en: "Academic Phrasebank", url: "https://www.phrasebank.manchester.ac.uk/" },
      { zh: "LaTeX 公式编辑器", en: "LaTeX Formula Editor", url: "https://www.latexlive.com/" },
      { zh: "LaTeX 表格生成器", en: "LaTeX Tables Generator", url: "https://www.tablesgenerator.com/" },
      { zh: "影响因子", en: "Impact Factor", url: "https://www.pubmed.pro/home" },
      { zh: "艾思科蓝", en: "AiScholar", url: "https://www.ais.cn/" },
    ],
  },
  {
    zh: "常读期刊", en: "Journals",
    links: [
      { zh: "Nature", en: "Nature", url: "https://www.nature.com/" },
      { zh: "Science", en: "Science", url: "https://www.science.org/journal/science" },
      { zh: "IEEE TPAMI", en: "IEEE TPAMI", url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=34", tags: "IEEE Transactions on Pattern Analysis and Machine Intelligence" },
      { zh: "IEEE TMI", en: "IEEE TMI", url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=42", tags: "IEEE Transactions on Medical Imaging" },
      { zh: "IEEE TIP", en: "IEEE TIP", url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=83", tags: "IEEE Transactions on Image Processing" },
      { zh: "IEEE TNNLS", en: "IEEE TNNLS", url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=5962385", tags: "IEEE Transactions on Neural Networks and Learning Systems" },
      { zh: "IEEE TIM", en: "IEEE TIM", url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=19", tags: "IEEE Transactions on Instrumentation and Measurement" },
      { zh: "IEEE TIE", en: "IEEE TIE", url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=41", tags: "IEEE Transactions on Industrial Electronics" },
      { zh: "IEEE TII", en: "IEEE TII", url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=9424", tags: "IEEE Transactions on Industrial Informatics" },
      { zh: "IEEE TBME", en: "IEEE TBME", url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=10", tags: "IEEE Transactions on Biomedical Engineering" },
      { zh: "MedIA", en: "MedIA", url: "https://www.sciencedirect.com/journal/medical-image-analysis", tags: "Medical Image Analysis" },
      { zh: "EAAI", en: "EAAI", url: "https://www.sciencedirect.com/journal/engineering-applications-of-artificial-intelligence", tags: "Engineering Applications of Artificial Intelligence" },
    ],
  },
  {
    zh: "文档与格式", en: "Documents & Files",
    links: [
      { zh: "PDF 合并及分割", en: "Smallpdf", url: "https://smallpdf.com/cn" },
      { zh: "PDF 工具箱", en: "PDF24 Tools", url: "https://tools.pdf24.org/zh/" },
      { zh: "图像及 PDF 压缩", en: "Image & PDF Compression", url: "https://docsmall.com/" },
      { zh: "文件格式转换", en: "File Conversion", url: "https://www.aconvert.com/" },
      { zh: "在线格式转换", en: "All to All", url: "https://www.alltoall.net/" },
      { zh: "数学计算", en: "Mathway", url: "https://www.mathway.com/zh/Algebra" },
    ],
  },
  {
    zh: "图像处理", en: "Images",
    links: [
      { zh: "JPG 图像压缩", en: "JPEG Compression", url: "https://compressjpeg.com/zh/" },
      { zh: "图像画质增强", en: "Photo Enhancer", url: "https://www.cutout.pro/photo-enhancer-sharpener-upscaler/upload" },
      { zh: "在线抠图", en: "Remove Background", url: "https://www.remove.bg/zh" },
      { zh: "证件照", en: "ID Photo", url: "https://id.zhengzhaopai.com/" },
    ],
  },
  {
    zh: "设计素材", en: "Design Resources",
    links: [
      { zh: "矢量图标", en: "Flaticon", url: "https://www.flaticon.com/" },
      { zh: "HTML 素材", en: "HTML Resources", url: "https://sc.chinaz.com/" },
      { zh: "Emoji 大全", en: "Emoji", url: "https://www.emojiall.com/zh-hans/copy" },
      { zh: "Emoji 融合", en: "Emoji Mix", url: "https://tikolu.net/emojimix" },
    ],
  },
  {
    zh: "效率工具", en: "Utilities",
    links: [
      { zh: "MikuTools 工具集", en: "MikuTools", url: "https://tools.miku.ac/" },
      { zh: "在线工具集合", en: "tool.lu", url: "https://tool.lu/" },
      { zh: "视频字幕搜索", en: "Subtitle Search", url: "https://www.subtitlecat.com/index.html" },
      { zh: "RSSHub", en: "RSSHub", url: "https://docs.rsshub.app/" },
      { zh: "VPN", en: "RideFullSpeed VPN", url: "https://networks001.ridefullspeed.us/" },
    ],
  },
  {
    zh: "自建工具", en: "Made by Me",
    links: [
      { zh: "时间与天气", en: "Time & Weather", url: "time_weather.html" },
      { zh: "实时汇率", en: "Currency Rates", url: "currency.html" },
      { zh: "摩斯电码", en: "Morse Code", url: "morse_encoder.html" },
      { zh: "COMSOL 肺成像笔记", en: "COMSOL Lung Imaging Notes", url: "COMSOL_notes.html" },
      { zh: "COMSOL 数据标号", en: "COMSOL Data Labeler", url: "COMSOL_tools1.html" },
    ],
  },
  {
    zh: "人文艺术", en: "Arts & Culture",
    links: [
      { zh: "古诗文网", en: "Gushiwen", url: "https://www.gushiwen.cn/" },
      { zh: "中华珍宝馆", en: "Chinese Treasures", url: "https://g2.ltfc.net/home" },
      { zh: "虚拟博物馆", en: "Gallerix", url: "https://gallerix.asia/" },
    ],
  },
  {
    zh: "摸鱼", en: "Just for Fun",
    links: [
      { zh: "喂鱼", en: "Goldfishies", url: "https://goldfishies.com/" },
      { zh: "迷宫生成器", en: "Maze Generator", url: "https://www.mazegenerator.net/" },
      { zh: "贪吃蛇", en: "Slither.io", url: "http://slither.io/" },
      { zh: "俄罗斯方块", en: "Tetris", url: "https://www.v2fy.com/game/tetris/" },
      { zh: "魔法键盘", en: "Magic Keyboard", url: "http://magickeyboard.io/" },
      { zh: "小霸王游戏机", en: "SUBOR Simulator", url: "https://www.yikm.net/" },
      { zh: "塔防", en: "Yorg.io", url: "https://yorg.io" },
      { zh: "音游", en: "Mikutap", url: "https://aidn.jp/mikutap/" },
      { zh: "打字战机", en: "ZType", url: "https://zty.pe/" },
      { zh: "下棋", en: "PlayOK", url: "https://www.playok.com/" },
      { zh: "连线", en: "Lines", url: "https://lines.frvr.com/" },
      { zh: "在线游戏", en: "CrazyGames", url: "https://www.crazygames.com" },
    ],
  },
];
