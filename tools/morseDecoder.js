function morseCodeDecoder(code) {
    const morseCodeMap = {
        '.-': 'A',
        '-...': 'B',
        '-.-.': 'C',
        '-..': 'D',
        '.': 'E',
        '..-.': 'F',
        '--.': 'G',
        '....': 'H',
        '..': 'I',
        '.---': 'J',
        '-.-': 'K',
        '.-..': 'L',
        '--': 'M',
        '-.': 'N',
        '---': 'O',
        '.--.': 'P',
        '--.-': 'Q',
        '.-.': 'R',
        '...': 'S',
        '-': 'T',
        '..-': 'U',
        '...-': 'V',
        '.--': 'W',
        '-..-': 'X',
        '-.--': 'Y',
        '--..': 'Z',
        '.----': '1',
        '..---': '2',
        '...--': '3',
        '....-': '4',
        '.....': '5',
        '-....': '6',
        '--...': '7',
        '---..': '8',
        '----.': '9',
        '-----': '0',
        '/': ' ',
        '.-.-.-': '.',
        '--..--': ',',
        '..--..': '?',
        '.----.': "'",
        '-.-.--': '!',
        '-..-.': '/',
        '-.--.': '(',
        '-.--.-': ')',
        '.-...': '&',
        '---...': ':',
        '-.-.-.': ';',
        '-...-': '=',
        '.-.-.': '+',
        '-....-': '-',
        '..--.-': '_',
        '.-..-.': '"',
        '...-..-': '$',
        '.--.-.': '@',
        '.-.-': 'Å',
        '.--.-': 'Ä',
        '..-..': 'É',
        '--.--': 'Ñ',
        '---.': 'Ö',
        '..--': 'Ü',
        '~.-': 'a',
        '~-...': 'b',
        '~-.-.': 'c',
        '~-..': 'd',
        '~.': 'e',
        '~..-.': 'f',
        '~--.': 'g',
        '~....': 'h',
        '~..': 'i',
        '~.---': 'j',
        '~-.-': 'k',
        '~.-..': 'l',
        '~--': 'm',
        '~-.': 'n',
        '~---': 'o',
        '~.--.': 'p',
        '~--.-': 'q',
        '~.-.': 'r',
        '~...': 's',
        '~-': 't',
        '~..-': 'u',
        '~...-': 'v',
        '~.--': 'w',
        '~-..-': 'x',
        '~-.--': 'y',
        '~--..': 'z',
    };
  
    const decodedChars = code
    .trim() // 去除首尾空格
    .split('/') // 按照/分割
    .map(char => {
      const decodedChar = morseCodeMap[char] || '';
    //   console.log(`Decoded char: ${decodedChar}`);
      return decodedChar;
    })
    .join('');

//   console.log(`Decoded message: ${decodedChars}`);

  return decodedChars;
}

// const morseCode = '..-./-.-./.-/..--.-/.-../../...-/./..--.-/--.-/--.../...-/-../-.../-.--/.-/...-/.-./----./-----/..-./---/...../-..-/.-../.----/-../--./..-./-../-.--/--../.../----./.-/--../---/.-./...-/--/----./....-/--../----./-/.-./-.../-./.';
// const apiKey = morseCodeDecoder(morseCode);
// console.log(apiKey);
  