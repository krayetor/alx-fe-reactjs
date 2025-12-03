/* @type {import('tailwindcss').Config} */

const { plugin } = require("postcss");

module.exports = {
    content: [
        './public/index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};