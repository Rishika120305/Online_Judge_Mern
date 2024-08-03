import flowbite from 'flowbite-react/tailwind';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(), // Include Flowbite's content
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(), // Include Flowbite's plugin
  ],
};

export default config;

