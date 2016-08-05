var path = require('path');
var gulp = require('gulp');
var babel = require("gulp-babel");
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var electron = require('electron-connect').server.create();

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var SRC_PATH = path.resolve(APP_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

// 开发
var webpackConfigDev = Object.create(webpackConfig);
webpackConfigDev.devtool = 'eval-source-map';
webpackConfigDev.debug = true;
// create a single instance of the compiler to allow caching
var devCompiler = webpack(webpackConfigDev);

// renderer process 的编译
gulp.task('webpack:build-dev', function () {
  devCompiler.run(function (err, status) {
    if (err) {
      throw new gutil.PluginError('webpack:build-dev', err);
    }
    gutil.log('[webpack:build-dev]', status.toString({
      colors: true
    }));
  });
});

// main process 的编译
gulp.task('babel:electron-main', function () {
  return gulp.src([APP_PATH + '/main.js', APP_PATH + '/main/**/*.js'], {base: APP_PATH})
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch:electron-main', ['babel:electron-main'], function () {
  electron.start();
  console.log('---->electron starting');
  gulp.watch(['./app/main.js', './app/main/**/*.js'], ['babel:electron-main']);
  gulp.watch(['./dist/main.js', './dist/main/**/*.js'], electron.restart);
});

gulp.task('watch:webpack-dev', ['webpack:build-dev'],  function () {
  console.log('---->react building');
  gulp.watch(['./app/src/**/*.{html,js,css}'], ['webpack:build-dev']);
  gulp.watch(['./dist/renderer/**/*.{html,js,css}'], electron.reload);
});

gulp.task('watch', ['watch:webpack-dev', 'watch:electron-main']);
gulp.task('dev', ['watch']);
