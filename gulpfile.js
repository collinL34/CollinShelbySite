const gulp = require('gulp');
const gulpNgConfig = require('gulp-ng-config');
gulp.task('test', function() {
    gulp.src('AppConfig.json')
        .pipe(gulpNgConfig('Angular.config'))
        .pipe(gulp.dest('.'))
});
