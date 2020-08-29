const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('postcss-custom-media'),
        require('postcss-media-minmax'),
        require('postcss-nesting'),
        require('tailwindcss')('tailwind.config.js'),
        // require('css-mqpacker'),
        require('cssnano'),
    ])
    .version();
