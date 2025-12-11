const config = {
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      screens: {
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        neutralLight: "#F5F5F5", // Light gray background
        neutralDark: "#A0A0A0",  // Medium gray for text / subtle elements
        primary: "#C94C3D",      // Red accent for buttons, highlights
        black: "#111111",         // Strong black for typography / dark areas
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: ["Merriweather", "serif"],
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
