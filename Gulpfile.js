const fs = require('fs');
const gulpSass = require('gulp-sass');
const path = require('path');
const { create } = require('browser-sync');
const { dest, parallel, series, src, watch } = require('gulp');

// Use Dart Sass.
gulpSass.compiler = require('sass');

// Instantiate the Browser Sync instance.
const bs = create();

// Delete the `css` folder.
const clean = (done) => {
  const cssPath = path.join(__dirname, 'css');
  if (fs.existsSync(cssPath)) {
    // The recursive option only works in Node 12.10.0 and up.
    return fs.rmdir(cssPath, { recursive: true }, (err) => (err === null ? done() : done(err)));
  }
  return done();
};

// Compile SCSS to CSS including sourcemaps.
// prettier-ignore
const compile = () => src('scss/styles.scss', { sourcemaps: true })
  .pipe(gulpSass().on('error', gulpSass.logError))
  .pipe(dest('css', { sourcemaps: '.' }));

// Stream the compiled CSS to Browser Sync.
const stream = () => compile().pipe(bs.stream({ match: '**/*.css' }));

// Watch all SCSS files for changes and let Browser Sync inject changes into the page.
const watchScss = () => watch('scss/**/*.scss', stream);

// Watch all HTML files for changes and let Browser Sync reload the page.
const watchHtml = () => watch('**/*.html').on('change', bs.reload);

// Start the Browser Sync server.
// prettier-ignore
const browserSync = (done) => bs.init({
  // Shorthand for serving all files in the current working directory.
  server: true,
  callbacks: {
    ready: (err) => (err === null ? done() : done(err)),
  },
});

exports.default = series(clean, compile, browserSync, parallel(watchScss, watchHtml));
exports.build = series(clean, compile);
