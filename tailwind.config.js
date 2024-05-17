/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'choco': '#B65F28',
                'Yell': '#FFD543',
                'White': '#FFFFFF',
            },
            fontFamily: {
                'fjalla': ['Fjalla One', 'sans-serif'],
                'droid': ['Droid Serif', 'serif']
            }
        },
    },
    plugins: [],
}

