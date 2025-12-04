# 🍽️ Recipe Sharing Platform

A responsive web application for browsing, viewing, and potentially sharing cooking recipes. This project is built using **React** (Vite) and styled with **Tailwind CSS**.

---

## 🎯 Features

* **Responsive Layout:** Optimized for mobile, tablet, and desktop views using Tailwind's responsive utilities.
* **Recipe Index (Home Page):** Displays a scrollable, responsive grid of recipe cards.
* **Mock Data Integration:** Loads initial recipe data from a static `data.json` file.
* **Recipe Detail View (Planned):** Dedicated page to show detailed ingredients and instructions.

---

## 💻 Technologies Used

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React (Vite) | Component-based UI development |
| **Styling** | Tailwind CSS | Utility-first CSS framework for rapid styling |
| **Build Tools**| PostCSS, Autoprefixer | Processing and optimizing CSS |
| **Language** | JavaScript (ES6+) | Core logic and functionality |
| **Package Mgr**| npm | Dependency management |

---

## ⚙️ Setup and Installation

Follow these steps to set up the development environment.

### Prerequisites

* Node.js (LTS recommended)
* npm (Node Package Manager)

### Installation Steps

1.  **Clone or Initialize the Project**
    ```bash
    # If starting fresh:
    npm create vite@latest recipe-sharing-platform -- --template react
    cd recipe-sharing-platform
    ```

2.  **Install Dependencies**
    Install all project dependencies, including the necessary PostCSS plugins for Tailwind integration.
    ```bash
    npm install
    npm install -D tailwindcss@3.3.3 postcss autoprefixer postcss-import
    ```

3.  **Configuration (Critical)**
    Due to the project's **ES Module** setup, configuration files must use the **`.cjs`** extension and the CommonJS syntax.

    Ensure you have the following **two files** in your root directory:
    * `postcss.config.cjs`
    * `tailwind.config.cjs` (or embed its content in the PostCSS file).

## ▶️ Running the Application

Execute the following command in the project root to start the development server:

```bash
npm run dev