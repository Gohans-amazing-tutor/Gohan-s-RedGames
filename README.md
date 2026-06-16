# Gohan RedGames 🕹️

A retro, old-school YouTube-inspired unblocked games platform built using HTML, CSS, and vanilla JavaScript. Featuring a premium dark/black interface with neon red styles, built-in dynamic text search, category filtering, and an ultra-smooth slide-up inline game player (iframe modal) so your gaming history doesn't clutter up your browser history.

Optimized to run entirely client-side, making it perfect for hosting directly via **GitHub Pages**.

---

## 🚀 Features

- **Retro Aesthetic**: 2005-2010 old-school video site style with a deep black background and sharp red accents.
- **Top Bar Layout**: Left-aligned dynamic search bar; Right-aligned custom branding (`logo.png`).
- **Sidebar Categories**: Filter instantly by FPS, Puzzle, Action, or view All Games.
- **Auto-Grid**: Automatically displays game cards in a clean, responsive 3-column grid structure.
- **Stealth / History Protection**: Games slide up smoothly from the bottom and open inside the page using an iframe. The actual game links never show up in your browser's URL or search history.
- **One-Line Management**: Adding, editing, or removing games is as simple as managing a single line of data in a JavaScript database.

---

## 📂 File Structure

Ensure all your project files are placed in the same main folder (root directory) like this:

```text
├── index.html        # Main layout structure
├── style.css         # Styling, animations, colors, and layouts
├── script.js        # Functional search, filters, and modal controls
├── games.js         # Single-line local game database 
├── logo.png         # Main site header logo 
├── favicon.png      # Custom tab browser icon 
└── games/           # (Optional) Store your downloaded HTML5 game folders here
