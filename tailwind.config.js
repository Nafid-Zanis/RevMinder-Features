/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend : {

    },
    colors : {
      primary1 : '#4C4DDC',
      primary2 : '#DFE0F3',
      primary3 : '#3334CC',
      primary4 : '#F2994A',
      primary5 : '#1F2147'
    }

  },
  container: {
    center: true,
    padding: {
      default: "20px",
      md: "50px"
    }
  },
  plugins: [
    require("daisyui"), require('flowbite/plugin')],
  
  daisyui: {
    themes: ["light"]
  }
}