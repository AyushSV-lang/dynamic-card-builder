# 🃏 Dynamic Card Builder

A slick, fully client-side **profile & product card generator** built with nothing but vanilla HTML, CSS, and JavaScript. No frameworks. No libraries. Just pure DOM manipulation and a dark UI that doesn't hurt your eyes.

> Built as Project 1 of my frontend JavaScript curriculum — entering Year 2 💪

---

## 🚀 Live Demo

👉 [View it live here]([https://ayushsrivastav.github.io/dynamic-card-builder](https://ayushsv-lang.github.io/dynamic-card-builder/)) ← *(replace with your GitHub Pages link)*

---

## 🎯 What it does

- **Live Preview** — type in the form and watch the preview card update in real-time, keystroke by keystroke
- **Generate Cards** — hit Generate and your card gets appended to the Live Catalog grid
- **Gender Avatar** — picks a different placeholder avatar based on Male/Female selection
- **Delete Cards** — every card has its own Delete button; uses event delegation so only one listener handles all of them
- **Persistent Storage** — cards survive page refresh via localStorage; close the tab, come back, they're still there
- **Form Reset** — after generating, the form clears itself automatically

---

## 🧠 Concepts used

| Concept | Where |
|---|---|
| DOM Selection & Caching | All queries at top of `app.js` |
| Live input events | Name, Status, Bio → preview update |
| `e.preventDefault()` | Form submit handler |
| `createElement` + `appendChild` | Card generation |
| Event Delegation | One click listener on catalog, handles all delete buttons |
| `localStorage` + `JSON.stringify/parse` | Card persistence across sessions |
| Array `splice` + `forEach` | Managing card data in sync with DOM |
| CSS Grid | Two-column app layout |
| Flexbox | Card internals, catalog grid |

---

## 📁 Folder Structure

```
dynamic-card-builder/
│
├── index.html
├── css/
│   └── style.css
└── js/
    └── app.js
```

---

## 🎨 Design

Dark UI built from scratch — no UI libraries, no templates. Color palette:

- Page bg: `#0F1117`
- Sidebar & Cards: `#181C27`
- Accent blue: `#3068D7`
- Borders: `#252A3A`
- Text muted: `#7A7A9A`

---

## 🛠️ How to run

No installs, no build step. Just clone and open.

```bash
git clone https://github.com/ayushsrivastav/dynamic-card-builder.git
cd dynamic-card-builder
# open index.html in your browser
```

---

## 👤 Author

**Ayush Srivastav**  
Frontend dev in the making — currently deep in JavaScript internals, DOM manipulation, and async patterns.

---

## 📌 Note

This is a learning project — part of a structured frontend curriculum. The goal wasn't just to make it work, but to understand *why* it works.
