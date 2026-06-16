# Sleek Dark Mode Calculator

A minimalist, responsive, iOS-inspired web calculator built using clean HTML, CSS Grid, and vanilla JavaScript. 

---

## 🚀 Features

* **Responsive Layout:** Automatically scales beautifully on mobile screens, tablets, and desktops using fluid sizing (`aspect-ratio`, `grid`, and media queries).
* **iOS Dark Mode Aesthetic:** Features a modern dark theme with smooth active states and button hover transitions on desktop.
* **Full Functionality:** Supports basic arithmetic operations (`+`, `-`, `*`, `/`), decimal percentages (`%`), multi-zero input (`00`), and a backspace feature (`<-x`).
* **Error Handling:** Catches malformed expressions safely and displays an `"Error"` message without crashing the UI.

---

## 🛠️ Tech Stack

* **HTML5:** Semantic structure for the calculator wrapper, display, and input keys.
* **CSS3:** Flexbox for centering, CSS Grid for the button layout, and Media Queries for responsive adjustments.
* **JavaScript (ES6):** Vanilla JavaScript for handling input capture, string evaluation, and backspace parsing.


## 📂 Code Architecture

* **`screen(input)`**: Appends the clicked button value directly to the calculator display.
* **`scree()`**: Evaluates the mathematical string expression securely inside a `try...catch` block using the `eval()` method.
* **`clear1()`**: Instantly resets and wipes the calculator display screen (`AC`).
* **`back()`**: Deletes the last entered character using string slicing, or clears out an active `"Error"` screen.

---

## 🚀 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)