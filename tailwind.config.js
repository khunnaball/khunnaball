module.exports = {
    purge: {
        //enable remove unused CSS only in production
        enabled: process.env.NODE_ENV === 'production',
        //any file that may contain the reference of CSS styles by class name.
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js'
        ]
    },
    darkMode: 'class',
    theme: {
        fontFamily: {
            mono: ['DM Mono', 'monospace'],
        },
        fontWeight: {
            light: 300,
            medium: 500,
        },
    },
    variants: {
        extend: {
            typography: ['dark'],
        },
    },
    plugins: [require('@tailwindcss/typography')],
}