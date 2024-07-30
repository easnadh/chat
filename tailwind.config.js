/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      flex: {
        2: '2 2 0%',
      },
      height: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '9.5/10': '95%',
      },
      width: {
        '8.5/10': '85%',
        '9/10': '90%',
      },
      maxWidth: {
        '10/10': '100%',
        '7/10': '70%',
      },
    },
  },
  plugins: [],
  important: true,
};
