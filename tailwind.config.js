module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        deep_orange: { 50: "#fee3e1" },
        gray: {
          50: "#fbfcfd",
          200: "#ebebeb",
          700: "#5f5f5f",
          900: "#111826",
          "50_01": "#f8fafc",
          "900_01": "#252424",
        },
        blue_gray: {
          50: "#eef2f6",
          100: "#cdd4de",
          300: "#99a3b2",
          500: "#697485",
          800: "#354152",
          900: "#1f2939",
        },
        orange: { A200: "#eba352" },
        red: { 900: "#b32218", "900_01": "#901f17" },
        indigo: { 50: "#e3e8ee" },
        yellow: { 400: "#ffdd67" },
        green: { A700: "#16b264" },
        black: { 900: "#000000" },
        blue: { 400: "#42ade2" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
