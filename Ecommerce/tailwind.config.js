/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.{razor,cshtml,html}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

//npx tailwindcss -i .\Components\Styles\tailwind.css -o .\wwwroot\css\tailwind.css --watch