const args = process.argv.slice(2).join(' ').split(' ');
const vowels = ['a', 'e', 'i', 'o', 'u'];
const translatedWords = [];

for (let word of args) {
  const lowerWord = word.toLowerCase();

  if (vowels.includes(lowerWord[0])) {
    translatedWords.push(lowerWord + 'way');
  } else if (
    !vowels.includes(lowerWord[0]) &&
    vowels.includes(lowerWord[1] || '')
  ) {
    translatedWords.push(lowerWord.slice(1) + lowerWord[0] + 'ay');
  } else if (!vowels.includes(lowerWord[0]) && !vowels.includes(lowerWord[1])) {
    translatedWords.push(lowerWord.slice(2) + lowerWord.slice(0, 2) + 'ay');
  }
}

console.log(translatedWords.join(' '));
