const mix = require('laravel-mix');

mix.js('src/script.js', 'js');

mix.options({
    hmrOptions: {
        host: 'e28.loc',
        port: 80
    }
})
