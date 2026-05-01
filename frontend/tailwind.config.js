module.exports = {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
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
                teachers: ['"Teachers"', 'system-ui', 'sans-serif'],
            },
        }
    },
    plugins: [],
}