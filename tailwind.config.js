module.exports = {
    purge: [],

    theme: {
        extend: {
            boxShadow: theme => ({
                'none': 'none',
                'thumbnail': `0 4px 10px ${theme('colors.gray.200')}`,
                'top-px': `0 -1px ${theme('colors.gray.200')}`,
                'bot-px': `0 1px ${theme('colors.white')}`,
            }),

            fontFamily: {
                'montserrat': [ 'Montserrat', 'system-ui', 'Roboto', 'Ubuntu', 'Cantarell', 'Fira Sans', 'sans-serif' ],
                'lato': [ 'Lato', 'system-ui', 'Roboto', 'Ubuntu', 'Cantarell', 'Fira Sans', 'sans-serif' ],
            },
        },

        colors: {

            gray: {
                '200': '#f7f7f7',
                '300': '#dedede',
                '500': '#9a9a9a',
                '700': '#757575',
            },

            orange: {
                '500': '#C89B65',
                '700': '#7A6854',
            },
        }
    },

    variants: {},

    plugins: [],
}
