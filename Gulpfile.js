const execa = require('execa');
const fs = require('fs-extra');
const gulpIf = require('gulp-if');
const gulpRename = require('gulp-rename');
const gulpSass = require('gulp-sass');
const { create } = require('browser-sync');
const { dest, parallel, series, src, watch } = require('gulp');

// Instantiate the Browser Sync instance.
const bs = create();

// Delete the `dist` folder and remove it from the worktree.
const clean = async () => {
  await fs.remove('./dist');

  // This always exits cleanly, even if there are no worktrees to prune.
  return execa('git', ['worktree', 'prune']);
};

// Clones the `master` branch into the `dist` folder.
const worktree = () => execa('git', ['worktree', 'add', '-B', 'master', 'dist', 'origin/master']);

// TODO: Copy scss folder as well.
// Copy static assets.
// prettier-ignore
const copy = () => src('src/static/**/*')
  .pipe(gulpIf('**/gitignore', gulpRename('.gitignore')))
  .pipe(dest('dist'));

// Copy HTML.
// prettier-ignore
const html = () => src('src/**/*.html').pipe(dest('dist'));

// Compile SCSS to CSS.
// prettier-ignore
const sass = () => src('src/scss/styles.scss')
  .pipe(gulpSass({ outputStyle: 'expanded' }).on('error', gulpSass.logError))
  .pipe(dest('dist/css'));

// Stream the compiled CSS to Browser Sync.
const reloadSass = () => sass().pipe(bs.stream({ match: '**/*.css' }));

// Stream the compiled HTML to Browser Sync.
const reloadHtml = () => html().pipe(bs.stream({ match: '**/*.html', once: true }));

// Watch all SCSS files for changes and let Browser Sync inject changes into the page.
const watchSass = () => watch('src/scss/**/*.scss', reloadSass);

// Watch all Pug files for changes and let Browser Sync reload the page.
const watchHtml = () => watch('src/**/*.html', reloadHtml);

// Start the Browser Sync server.
// prettier-ignore
const browserSync = (done) => bs.init({
  server: 'dist',
  callbacks: {
    ready: (err) => (err === null ? done() : done(err)),
  },
});

// prettier-ignore
exports.default = series(
  clean,
  worktree,
  copy,
  html,
  sass,
  browserSync,
  parallel(watchHtml, watchSass),
);

// prettier-ignore
exports.build = series(
  clean,
  worktree,
  copy,
  html,
  sass,
);
