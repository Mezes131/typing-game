# Typing Game

A simple and fun typing game built with HTML/CSS/JavaScript.

## Description

`typing-game` is a small web game where the player must correctly type the letters/words that appear on the screen before the time runs out. The goal is to improve typing speed and accuracy.

This project is self-contained and can be played locally in the browser (no server installation required).

## Files

- `index.html`: main game page.
- `style.css`: styles and layout.
- `script.js`: game logic (word/letter generation, key detection, scoring and timing).

## How to play

1. Open `index.html` in your browser (double-click it or drag it into a browser window).
2. The game will start (or click "Start Game" if the interface provides a button).
3. Type the letters or words displayed on the screen. Each correct entry increases your score.
4. Try to reach the highest score before time runs out.

Tips:
- Keep your eyes on the screen and type with both hands.
- Focus on accuracy; speed will come with practice.

## Requirements

A modern browser (Chrome, Firefox, Edge, Safari). No external dependencies.

## Quick customization

To modify the word list, speed, or other parameters:

- Open `script.js` and look for the variables or arrays that define the words, the delay between items, or the game duration.
- Change the values and reload `index.html` in your browser.

## Development

To contribute or test locally:

1. Clone the repository or copy the project files to your machine.
2. Open `index.html` in a browser to play.

If you prefer to run a small local server (useful for debugging or when certain browser APIs require a server):

- With Python 3.x:
  - `python -m http.server 8000` from the project folder, then open `http://localhost:8000`.

## License

This project is free — adapt and improve it as you like. If you add external content (words, sounds, images), check the corresponding licenses.

## Credits

Created by **Mezes**. Please open an issue or a PR if you have suggestions.

---

Have fun and happy typing!
