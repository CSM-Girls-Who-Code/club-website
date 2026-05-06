/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                lilac: "#D8A7D1",
                lavender: "#FDE5FA",
                porcelain: "#FFFCF8",
                amaranth: "#80677F",
                carbon: "#2F2F2F",
            },
            fontFamily: {
                teachers: ['Teachers', 'cursive'],
            },
        },
    },
    plugins: [],
}