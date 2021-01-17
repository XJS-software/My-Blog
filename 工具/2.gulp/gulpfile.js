const gulp = require('gulp')
const babel = require('gulp-babel')
const del = require('del')
const uglify = require('gulp-uglify')
const {pipeline} = require('readable-stream')

const less = require('gulp-less')
const base64 = require('gulp-base64')
const connect = require('gulp-connect')

const {series,parallel,watch} = gulp
const jsDest = 'src/**/*.js'
const cssDest = 'src/**/*.less'
const htmlDest = 'src/**/*.html'

function clean(){
    return del(['./dist'])
}

function jsTask(){
    return gulp.src(jsDest).
        pipe(
            babel({
                presets: ['@babel/env']
            })
        ). 
        // pipe(uglify()).
        pipe(gulp.dest('./dist/static'))
}

function cssTask(){
    return gulp.src(cssDest).
        pipe(less()). 
        pipe(base64()).
        pipe(gulp.dest('./dist/static'))

}

function htmlTast(){
    return gulp.src(htmlDest).
        pipe(gulp.dest('./dist'))
}

function server(){
    return connect.server({
        port: 8800,
        root: 'dist',
        livereload: true
    })
}

watch([jsDest], function(){
    return jsTask().pipe(connect.reload())
})

watch([cssDest], function(){
    return cssTask().pipe(connect.reload())
})

watch([htmlDest], function(){
    return htmlTast().pipe(connect.reload())
})

exports.default = series(clean, parallel(jsTask, cssTask, htmlTast), server)
