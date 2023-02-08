/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navcolor: "#F8F7FB",
        navitem: "#8777D7",
      },
      backgroundImage: {
        'rect': "url('Assets/Rectangle.png')"
      }
    }
    ,
  },
  plugins: [],
}
