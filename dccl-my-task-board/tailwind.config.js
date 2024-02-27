/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "light-gray": "#E3E8EF",
        dove: "#97A3B6",
        ecru: "#F5E8D5",
        yellow: "#F5D565",
        orange: "#E9A23B",
        salmon: "#F7D4D3",
        red: "#DD524C",
        "light-green": "#A0ECB1",
        green: "#32D657",
        blue: "#3662E3",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(transparent|current|white|gray|dove|blue|ecru|yellow|orange|salmon|red|green|light-green|black)/,
    },
  ],
};
