

## Technologies Used
- **HTML5** for structure
- **CSS3** for styling 
- **JavaScript** for interactivity (dark mode toggle)
- **GitHub Pages** for hosting

## JavaScript Feature Explanation
The dark mode toggle works by:
1. Selecting the toggle button using `getElementById`.
2. Adding a click event listener.
3. Toggling a `.dark-mode` class on the `<body>`.
4. Changing the button text depending on the active mode.

This allows the entire site to switch themes instantly.

## Responsive Design Approach
- Used `max-width` to center content and prevent stretching.
- Applied flexible spacing and clean layout.
- Added a media query at `max-width: 600px` to:
  - Stack navigation vertically
  - Reduce padding
  - Resize images
This ensures the site looks good on phones, tablets, and desktops.
