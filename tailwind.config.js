module.exports = {
	mode:"jit",
  content: ["./pages/**/*.{html,js}",
            "./Components/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens:{
        "3xl":"2000px",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
