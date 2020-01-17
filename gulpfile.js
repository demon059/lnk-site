// инициализация gulp
const gulp = require('gulp');
// плагин для сборки в один файл
const concat = require('gulp-concat');
// плагин для сжатия css
const cleanCSS = require('gulp-clean-css');
// плагин для сжатия js
const uglify = require('gulp-uglify');
// удаляет все из папке билда
const del = require('del');
// автообновление браузера
const browserSync = require('browser-sync').create();
const rename = require("gulp-rename");
// плагин sass
const sass = require('gulp-sass');
// добавляет префиксы к css свойствам
const autoprefixer = require('gulp-autoprefixer');
// плагин для отладки кода в dev tools
const sourcemaps = require('gulp-sourcemaps');
// плагин для преобразования новых стандартов js в старые
const babel = require('gulp-babel');
// плагин для сжатия изображений
const imagemin = require('gulp-imagemin');

var paths = {
    styles: {
        src: 'src/scss/main.scss',
        dest: 'build/css/'
    },
    scripts: {
        src: 'src/js/scripts/**/*.js',
        dest: 'build/js/scripts/'
    },
    libs: {
        src: 'src/js/libs/**',
        dest: 'build/js/libs/'
    },
    images: {
        src: 'src/img/**',
        dest: 'build/img/'
    },
    icons: {
        src: 'src/web-fonts-with-css/**/*',
        dest: 'build/web-fonts-with-css/'
    }
};

function styles () {
    // поиск всех файлов с раширением .css
    // return gulp.src('./src/css/**/*.css')
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true,
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            overrideBrowserslist: ['> 0.1%'],
            cascade: false
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

function scripts () {
    return gulp.src(paths.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.min.js'))
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream());
}

function libs () {
    return gulp.src(paths.libs.src)
        .pipe(gulp.dest(paths.libs.dest))
}

function icons () {
    return gulp.src(paths.icons.src)
        .pipe(gulp.dest(paths.icons.dest))
}

function imgCompress () {
    return gulp.src(paths.images.src)
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(paths.images.dest))
}

function watch () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./src/img/**', gulp.series('imgCompress'))
    gulp.watch('./src/scss/**', styles)
    gulp.watch('./src/css/**/*.css', styles)
    gulp.watch('./src/js/scripts/**/*.js', scripts)
    gulp.watch('./*.html', browserSync.reload)
}

function clean () {
    return del(['build/*']);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('imgCompress', imgCompress);
gulp.task('watch', watch);

gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts, imgCompress, libs, icons)));
gulp.task('dev', gulp.series(clean, gulp.parallel('build', 'watch')));