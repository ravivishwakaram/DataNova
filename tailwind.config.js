/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],  // Load the NativeWind preset
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
};
