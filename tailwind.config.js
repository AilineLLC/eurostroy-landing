module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        './src/app/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {},
            keyframes: {
                'marquee-scroll': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(calc(-100% / 3))' },
                },
            },
            animation: {
                'marquee-scroll': 'marquee-scroll 30s linear infinite',
            },
        },
    },
    plugins: [],
}
