/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navcolor: "#F9F8FD",
        navitem: "#8777D7",
      },
      backgroundImage: {
        'rect': "url('Assets/Rectangle.png')",
        'rect-mobile': "url('Assets/AM1.svg')",
        'home-about-desktop': "url('Assets/A2.svg')",
        'home-about-mobile': "url('Assets/AM2.svg')",
        'about-journey-desktop': "url('Assets/S2.svg')",
        'about-journey-mobile': "url('Assets/EM2.svg')",
      },
    }
    ,
  },
  plugins: [],
}
