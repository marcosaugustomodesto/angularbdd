// instanciando módulos
var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('scripts', function() {
    // corpo da tarefa 
    return gulp
            .src(['app/services/users/src/**/*.js'])
            .pipe(uglify())
            .pipe(gulp.dest('app/services/users/build'));      
});

gulp.task('watch', function() {
    // corpo da tarefa 
    gulp.watch('app/services/users/src/**/*.js', function(event) {
        gutil.log('File '+event.path+' was '+event.type+', running tasks...');
        gulp.run('scripts');
    });
});