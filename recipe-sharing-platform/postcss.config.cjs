// In file: postcss.config.cjs (Use Object Notation for reliable loading)

module.exports = {
  plugins: {
    // 1. PostCSS Import must be loaded as an object
    'postcss-import': {},
    
    // 2. Tailwind must be loaded as a property
    tailwindcss: {
      config: {
        // Tailwind Configuration embedded here
        content: [
          './index.html',
          './src/**/*.{js,jsx,ts,tsx}',
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      },
    },
    // 3. Autoprefixer must be loaded as an object
    autoprefixer: {},
  },
};