<h1 align="center">
  <img src="https://github.githubassets.com/images/icons/emoji/unicode/1f438.png" alt="frog emoji" width="64">
  <br />
  Treehouse Style Guide
</h1>

<h3 align="center">Unit 4 of the Treehouse Front End Techdegree</h3>

<h3 align="center">
  <img src="https://img.shields.io/badge/-html-e34f26?logo=html5&logoColor=fff" alt="html badge" />
  <img src="https://img.shields.io/badge/-sass-cc6699?logo=sass&logoColor=fff" alt="sass badge" />
</h3>

## About

The fourth unit demonstrates using Sass variables, mixins, and nesting to recreate a "style guide"
from CSS. All styles must be modular and only a single `styles.css` file should be emitted.

The original style guide can be viewed in the [`resources`](./resources) folder and the live demo
can been seen [here](https://adamelliotfields.github.io/treehouse-style-guide/resources/index.html).

The HTML and CSS code must pass W3C validation.

## Installation

```bash
git clone --single-branch -b master https://github.com/adamelliotfields/treehouse-style-guide.git
```

## Usage

You can view hosted site [here](https://adamelliotfields.github.io/treehouse-style-guide/index.html).

You can also simply open `index.html` in your browser directly. For example, if your macOS user name
is `adam` and you cloned the repo in `~/Downloads`, then go to
`file:///Users/adam/Downloads/treehouse-style-guide/index.html` in your web browser.

Finally, you can also use PHP or Python's built-in HTTP server by running one of these commands in
the same directory as `index.html`.

```bash
# PHP
php -S localhost:8000

# Python 2
python -m SimpleHTTPServer

# Python 3
python3 -m http.server
```

## Sass

### Installation

I recommend [Scout](https://scout-app.io) if you are not comfortable with the command line. It is
free, open-source, and cross-platform.

#### macOS

```bash
brew tap sass/sass

brew install sass/sass/sass
```

#### Windows

```bash
choco install sass
```

#### Linux

```bash
wget -qO /tmp/dart-sass.tar.gz https://github.com/sass/dart-sass/releases/download/1.26.10/dart-sass-1.26.10-linux-x64.tar.gz

tar -C /tmp -xzf /tmp/dart-sass.tar.gz

sudo mv /tmp/dart-sass/sass /usr/local/bin

sudo chmod +x /usr/local/bin/sass

rm -rf /tmp/dart-sass /tmp/dart-sass.tar.gz
```

### Compiling SCSS to CSS

```bash
sass scss/styles.scss css/styles.css

# or

sass --watch scss/style.scss css/styles.css
```

## Validating HTML and CSS

Use the [W3C HTML](https://validator.w3.org/#validate_by_input) and
[W3C CSS](https://jigsaw.w3.org/css-validator/#validate_by_input) validators by pasting the code
into the text input.

## Browser Compatibility

- Chrome 84
- Firefox 79
- Safari 13
