# Menu Challenge

## Overview

This challenge is to build a **responsive multi-level navigation menu** that works both on **desktop and mobile**. The goal is to transform the existing desktop menu into a fully functional mobile menu with smooth animations and accessibility considerations.

## Requirements

### Desktop Menu:

-   The menu should display as a **horizontal navigation bar**.
-   Submenus should appear **on hover**.
-   Submenus should be **nested**, allowing multi-level navigation.
-   Clicking outside the menu should close any open submenus.

### Mobile Menu:

-   The menu should collapse into a **hamburger menu**.
-   Clicking the hamburger icon should toggle the menu **open/close**.
-   Submenus should open **on tap** instead of hover.
-   The menu should be **full-screen overlay or a slide-in sidebar**.
-   Clicking outside the menu should close it.
-   **Animations** should make transitions smooth.

### Bonus Features:

-   Implement **keyboard accessibility** (e.g., arrow keys to navigate the menu).
-   Ensure the menu is **fully responsive** across different screen sizes.

## Project Setup

### Installation:

1. Clone the repository:
    ```sh
    git clone <repo-url>
    cd menu-challenge
    ```
2. Install dependencies:
    ```sh
    npm install
    ```

### Development:

To start the development server:

```sh
npm run dev
```

The project will be available at `http://localhost:3000/`.

### Build:

To generate a production-ready build:

```sh
npm run build
```

## File Structure

```
menu-challenge/
├── node_modules/         # Dependencies
├── public/               # Public assets (favicon, etc.)
├── script/
│   ├── main.js           # JavaScript logic for menu functionality
├── styles/
│   ├── style.scss        # Main SCSS file
│   ├── parts/
│   │   ├── _header.scss  # SCSS for the header and menu
├── index.html            # Main HTML file
├── package.json          # Project metadata and dependencies
├── package-lock.json     # Dependency lock file
├── vite.config.js        # Vite configuration
```

## Getting Started

1. Implement the **desktop menu functionality** first.
2. Add **mobile menu toggle logic**.
3. Use **CSS animations** for smooth transitions.
4. Ensure accessibility and usability on different devices.

Good luck! 🚀
