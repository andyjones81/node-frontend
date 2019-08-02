const gulp = require('gulp')
const requireDir = require('require-dir')

requireDir('./gulp', {recurse: true})


gulp.task('generate-assets', gulp.series(
    'clean',
    'sass-extensions',
    gulp.parallel(
      'sass',
      'copy-assets'
    )
  ))

  gulp.task('watch', gulp.parallel(
    'watch-sass',
    'watch-assets'
  ))

  gulp.task('default', gulp.series(
    'generate-assets',
    gulp.parallel(
      'watch',
      'server'
    )
  ))