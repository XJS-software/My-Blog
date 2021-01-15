const gulp = require('gulp')
const babel = require('gulp-babel')
const del = require('del')
const uglify = require('gulp-uglify')
const {pipeline} = require('readable-stream')

const less = require('gulp-less')

const {series,parallel,watch} = gulp
const jsDest = 'src/**/*.js'
const cssDest = 'src/**/*.less'

function clean(){
    return del(['./dist'])
}

function getStream(){
    return gulp.src(jsDest)
}

function jsTranspile(){
    return  babel({
                presets: ['@babel/env']
            })           
}

function jsUglify(){
    return uglify()
}

function output(){
    return gulp.dest('./dist/static')
}

function jsTask(){
    return pipeline(
        getStream(),
        jsTranspile(),
        jsUglify(), 
        output() 
    )
}

function cssTask(){
    return pipeline(
        gulp.src(cssDest),
        less({
        }),
        gulp.dest('./dist/static')
    )
}

watch([jsDest], function(){
    return jsTask()    
})

watch([cssDest], function(){
    return cssTask()
})


exports.default = series(clean, parallel(jsTask, cssTask))
