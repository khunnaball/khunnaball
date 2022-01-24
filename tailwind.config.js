module.exports = {
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            mono: ['DM Mono', 'monospace'],
        },
        fontWeight: {
            light: 300,
            medium: 500,
            hard: 700,
        },
    },
    variants: {
        extend: {
            typography: ['dark'],
        },
    },
    plugins: [require('@tailwindcss/typography')],
}