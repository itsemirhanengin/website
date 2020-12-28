const gulp = require('gulp'),
      plumber = require('gulp-plumber'),
      rename = require('gulp-rename'),
      autoprefixer = require('gulp-autoprefixer'),
      header = require('gulp-header'),
      uglify = require('gulp-uglify'),
      sass = require('gulp-sass'),
      concat = require('gulp-concat'),
      nunjucksRender = require('gulp-nunjucks-render'),
      browserSync = require('browser-sync');

function taskLibJS() {
  return gulp
    .src([
      'src/js/vendor/jquery.min.js',
			'src/js/vendor/bootstrap.min.js',
			'src/js/vendor/masked-input.js',
			'node_modules/owl.carousel/dist/owl.carousel.min.js',
			'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js'
    ])
    .pipe(header('\ufeff')) // Türkçe karakterlerde sorun çıkmaması için, UTF8 BOM
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit('end');
        }
      })
    )
    .pipe(concat('lib.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist/js/'));
}

function taskCoreJS() {
  return gulp
    .src([
      'src/js/base.js',
			'src/js/component/fancybox.js',
			'src/js/component/dropdown.js',
			'src/js/init.js'
    ])
    .pipe(header('\ufeff')) // Türkçe karakterlerde sorun çıkmaması için, UTF8 BOM
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit('end');
        }
      })
    )
    .pipe(concat('core.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist/js/'))
    .pipe(browserSync.reload({ stream: true }));
}

function taskSass() {
  const vendors = gulp
    .src([
      'node_modules/owl.carousel/dist/assets/owl.carousel.min.css',
			'node_modules/owl.carousel/dist/assets/owl.theme.default.min.css',
			'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css',
    ])
    .pipe(header('\ufeff')) // Türkçe karakterlerde sorun çıkmaması için, UTF8 BOM
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit('end');
        }
      })
    )
    .pipe(concat('vendors.css'))
    .pipe(gulp.dest('public/dist/css/'));

  const main = gulp
    .src(['src/sass/**/*.scss'])
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit('end');
        }
      })
    )
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest('public/dist/css/'))
    .pipe(browserSync.reload({ stream: true }));

  return main;
}

function taskNunjucks() {
  return gulp
    .src('views/pages/**/**.+(html|nunjucks)')
    .pipe(
      nunjucksRender({
        path: ['views']
      })
    )
    .pipe(gulp.dest('public/'))
    .pipe(browserSync.reload({ stream: true }));
}

function taskReload() {
  return browserSync.reload();
}

function taskWatch() {
  browserSync({
    server: {
      baseDir: './public/'
    }
  });
  gulp.watch('src/sass/**/*.scss', taskSass);
  gulp.watch('src/js/**/*.js', taskCoreJS);
  gulp.watch('src/js/**/*.js', taskLibJS);
  gulp.watch('views/**/*.+(html|nunjucks)', taskNunjucks);
  gulp.watch('public/**/*.html', taskReload);
}

exports.taskLibJS = taskLibJS;
exports.watch = taskWatch;
