const args = process.argv.slice(2);
const phrase = args.slice(0, -1).join(' ');
const shift = parseInt(args[args.length - 1]);

let encrypted = '';

for (let char of phrase) {
  const isLetter = char.match(/[a-z]/i);
  const isUpper = char === char.toUpperCase();
  const base = isUpper ? 65 : 97;

  if (isLetter) {
    const code = char.charCodeAt(0);
    const shifted = (code - base + shift + 26) % 26;
    const newChar = String.fromCharCode(shifted + base);
    encrypted += newChar;
  } else {
    encrypted += char;
  }
}

console.log(encrypted);
