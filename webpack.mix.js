const mix = require('laravel-mix');
const publicDir = "../public";

mix.setPublicPath(publicDir);
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

//mix.js('resources/js/app.js', 'public/assets/js')

mix.alias({
  '@': 'src'
});

mix.vue({version:3});

mix.ts('src/main.ts','assets/admin/js/app.js')
   //.sass('resources/scss/app.scss', 'public/assets/css')
   // .sass('resources/admin/scss/app.scss', 'public/assets/admin/css')
   .version();

mix.webpackConfig({
  output:{
    chunkFilename: 'assets/admin/js/[name].js',
  },
});
