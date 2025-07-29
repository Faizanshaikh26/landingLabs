// tailwind.config.js
export default {
  content: [
    "./index.html",        // or your HTML files
    "./src/**/*.{js,ts,jsx,tsx}",  // adjust according to your project
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
