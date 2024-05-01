import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            sans: [
                '"Merriweather", italic',
            ],
            leagueSpartan: [
                '"League Spartan"'
            ]
        },
        extend: {
            colors: {
                neutral: {
                    100: '#30373E',
                    200: '#B6C3D1',
                    500: '#1F2327',
                    600: '#30373E',
                },
                accent: {
                    100: '#BDA655'
                },
                base: {
                    100: '#E1E9F3'
                }
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
