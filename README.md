# 🛠️ JavaScript Node.js CLI Projects

This repository contains a collection of small, practical command-line applications written in **JavaScript** using **Node.js**. Each mini-project demonstrates how to work with the terminal, parse user input, and manipulate strings or data using core JS features — without a browser.

---

## 📦 Projects

### 1. Rock Paper Scissors (CLI Game)

A simple interactive command-line game.

- Accepts player's move via CLI (`rock`, `paper`, or `scissors`)
- Randomly generates computer's move
- Determines and displays the winner

**Run example:**
```bash
node rockPaperScissors.js rock
# → You chose: rock
# → Computer chose: scissors
# → You win!
```

---

### 2. Pig Latin Translator

Translates English phrases into Pig Latin based on simple rules.

* Handles single and multiple words
* Supports words starting with vowels, 1 or 2 consonants

**Run example:**

```bash
node pigLatin.js "Pig Latin is hard to speak"
# → igpay atinlay isway ardhay otay eakspay
```

---

### 3. Caesar Cipher (Encryptor)

Implements basic Caesar cipher encryption.

* Accepts a phrase and shift number
* Supports both positive and negative shifts
* Preserves case and non-letter characters

**Run example:**

```bash
node caesarCipher.js "Hello World!" 3
# → Khoor Zruog!
```

---
