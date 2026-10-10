// шифр Цезаря по русскому алфавиту (включая ё)
const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

function cesar(str, shift, action) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const idx = alphabet.indexOf(char.toLowerCase());
    if (idx === -1) {
      result += char;
      continue;
    }
    let newIdx;
    if (action === 'encode') {
      newIdx = (idx + shift) % alphabet.length;
    } else {
      newIdx = (idx - shift + alphabet.length) % alphabet.length;
    }
    const letter = alphabet[newIdx];
    result += char === char.toUpperCase() ? letter.toUpperCase() : letter;
  }
  return result;
}

// расшифровка сообщения: "эзтыхз фзъзъз"
// ответ: "хакуна матата" (сдвиг 8)
console.log(cesar('эзтыхз фзъзъз', 8, 'decode'));
