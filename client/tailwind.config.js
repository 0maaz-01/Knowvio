/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Add these two lines in this file.
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize : {
        'course-details-heading-small' : ['26px', '36px'],
        'course-details-heading-small' : ['36px', '44px'],
        'home-heading-small' : ['28px', '34px'],
        'home-heading-large' : ['48px', '56px'],
        'default' : ['15px', '21px']
      }
      ,
      colors: {
        'custom-purple': '#6D14C4', 
        'custom-black': '#0B0705', 
        'custom-white': '#FFFFF0',
      },
  },
  plugins: [],
}

}