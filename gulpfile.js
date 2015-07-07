/* GULP COMMANDS
   
   *************** HAVE TO CREATE 'gulpfile.js' ***************
   
   CONSOLE COMMANDS:
   gulp: Runs all default and user defined tasks
   gulp 'task name': Runs all user defined tasks

   GULP FUNCTINOS:
   require(): is used to require gulp and all plugins
   .task('task name', callback or array): is used to define tasks that need to be run
   .pipe(some function): is used to connect what's run within each task
   .src('files to work from'): is the source of the files we are working on and minifying
   .dest('output folder'): is used to define the output folder of files
   .watch('files to watch', ['Tasks to run']): is used to watch for changes of files


*/
/*GULP and GULP Plugins are defined here after being installed via npm*/
var gulp = require('gulp'), // GULP
  plumber = require('gulp-plumber'), // SYNTAX ERROR CHECKER
  uglify = require('gulp-uglify'), // MINIFY JAVASCRIPT
  minifyCss = require('gulp-minify-css'), // MINIFY CSS 
  sass = require('gulp-sass'), 
  template = require('gulp-template-compile'),
  wrap = require('gulp-wrap'),
  declare = require('gulp-declare'),
  concat = require('gulp-concat'),
  connect = require('gulp-connect');


var JAVASCRIPT_SRC = [
    'vendor/js/jquery.js',
    'vendor/js/lodash.js',
    'vendor/js/impress.js',
    'src/js/templates.js',
  ],
  CSS_SRC = "src/css/*.scss",
  IMAGE_SRC = "src/images/**/*",

  JAVASCRIPT_DEST = "dist",
  CSS_DEST = "dist",

  JAVASCRIPT_DEST_FILE_NAME = "apis_dont_be_bad.js"
  CSS_DEST_FILE_NAME = "apis_dont_be_bad.css";


gulp.task('scripts', function(){
  return gulp.src(JAVASCRIPT_SRC)
  .pipe(plumber())
  .pipe(concat(JAVASCRIPT_DEST_FILE_NAME))
  // .pipe(uglify())
  .pipe(gulp.dest(JAVASCRIPT_DEST))
  .pipe(connect.reload());
});

/* This task watches css and minifies styles */
gulp.task('styles', function(){
  gulp.src(CSS_SRC)
  .pipe(sass().on('error', sass.logError))
  // .pipe(minifyCss())
  .pipe(concat(CSS_DEST_FILE_NAME))
  .pipe(gulp.dest(CSS_DEST))
  .pipe(connect.reload());
});

gulp.task('images', function () {
  gulp.src(IMAGE_SRC)
    .pipe(gulp.dest('dist/images'));
});

gulp.task('watch', function(){  
  gulp.watch(IMAGE_SRC, ['images']); 
  gulp.watch(JAVASCRIPT_SRC, ['scripts']);
  gulp.watch(CSS_SRC, ['styles']);
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});
 
gulp.task('default', ['watch', 'styles', 'images', 'scripts', 'webserver']);