import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                skyBlue: {
                    50: "#eff9ff",
                    100: "#dff3ff",
                    200: "#b7e9ff",
                    300: "#78d9ff",
                    400: "#30c6ff",
                    500: "#05aff2",
                    600: "#008dcf",
                    700: "#0070a7",
                    800: "#025f8a",
                    900: "#084e72",
                    950: "#05324c",
                },
                rose: {
                    50: "#fff0f9",
                    100: "#ffe3f6",
                    200: "#ffc6ec",
                    300: "#ff98db",
                    400: "#ff58c0",
                    500: "#ff27a5",
                    600: "#ff007f",
                    700: "#df0063",
                    800: "#b80052",
                    900: "#980347",
                    950: "#5f0026",
                },
                grass: {
                    50: "#edfee7",
                    100: "#d6fccb",
                    200: "#b0f99d",
                    300: "#7ff264",
                    400: "#54e635",
                    500: "#33cb16",
                    600: "#22a30d",
                    700: "#1d7c0f",
                    800: "#1b6212",
                    900: "#1a5314",
                    950: "#082e05",
                },
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
