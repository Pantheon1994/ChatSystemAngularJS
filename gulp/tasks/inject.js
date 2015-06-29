var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var inject = require('gulp-inject');

gulp.task('inject', function () {
    var target = gulp.src('./client/index.html');
    var sources = gulp.src(mainBowerFiles(), {base: 'client/libs'});
    var sourcesAngular = gulp.src(['./client/angular/**/*.js', './client/app/**/*.js', './client/styles/**/*.css'], {read: false});

    return target.pipe(inject(sources, {relative:true}))
        .pipe(inject(sourcesAngular, {relative: true, name: 'angular'}))
        .pipe(gulp.dest('./client'));
});
