/*Fichero encargado de automatizar tareas mediante GULP*/

'use strict';

/*
* Dependencias
*/
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');


/*
* Tareas
*/

// Tarea para concatenar los fragmentos HTML en 'index.html'
gulp.task('concatenar', function() {
  return gulp.src('./src/html/*.html')  // cód. fuente
    .pipe(concat('index.html'))         // tarea
    .pipe(gulp.dest('./dist/'));        // destino
});

// Tarea para parsear los archivos SASS (.scss) --> CSS (.css)
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

/* Tarea por defecto (automaización de tareas) */
gulp.task('default', function() {
   gulp.watch('src/**/*.*', ['concatenar','sass']);
});
