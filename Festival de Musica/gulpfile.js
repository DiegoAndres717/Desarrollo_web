
const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat')

//Funcion que compila SASS
const paths = {
    scss: 'scss/**/*.scss',
    js: 'src/img/js/**/*.js'
}


function css( ) {
    return src(paths.scss)
        .pipe( sass({
            outputStyle: 'expanded'
        }) )
        .pipe( dest('./build/css'));
    
    
}

function minificarCss() {
    return src('scss/app.scss')
    .pipe( sass({
        outputStyle: 'compressed'
    }) )
    .pipe( dest('./build/css'));
}

function javaScript(){
    return src(paths.js)
    .pipe( concat('bundle.js'))
    .pipe( dest( './build/js'))
}

function watchArchivos () {
    watch( paths.scss, css );
    watch(paths.js, javaScript);
}

exports.css = css;
exports.minificarCss = minificarCss;
exports.watchArchivos = watchArchivos;

exports.default = series( css, javaScript, watchArchivos)