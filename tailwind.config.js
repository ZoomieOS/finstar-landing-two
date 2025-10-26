export default {
    content: ["./index.html", "./src/**/*.{js,ts}"],
    theme: {
        extend: {
            container: {
                center: true,
                screens: {
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                    "2xl": "1536px"
                }
            },
            maxWidth: {
                container: "75rem",
                containerWide: "90rem"
            },
            colors: {
                brand1: "#957E77",
                brand2: "#357B5D",
                brand3: "#6CA4E0",
                brand4: "#8582AE",
                text: "#000000",
                footer: "#355F7B"
            },
            fontFamily: {
                sans: ["Montserrat", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Noto Sans", "sans-serif"]
            },
            spacing: {
                section: "3.125rem",
            },
        }
    },
    plugins: []
}