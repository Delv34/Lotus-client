/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'CS-Reg': ['CS-Reg'],
        'CS-Bold':['CS-Bold'],
        'I-Reg': ['I-Reg'],
        'I-Med': ['I-Med'],
        'I-Bold':['I-Bold']

      },
      boxShadow: {
        'reg':'0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}

