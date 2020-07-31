<h1 align="center">
  <img src="https://github.githubassets.com/images/icons/emoji/unicode/1f438.png" alt="frog emoji" width="64">
  <br />
  Treehouse Style Guide
</h1>

<h3 align="center">Unit 4 of the Treehouse Front End Techdegree</h3>

<h3 align="center">
  <img src="https://img.shields.io/badge/-html-e34f26?logo=html5&logoColor=fff" alt="html badge" />
  <img src="https://img.shields.io/badge/-css-1572b6?logo=css3&logoColor=fff" alt="css badge" />
</h3>

## About

The fourth unit demonstrates using Sass variables, mixins, and nesting to recreate a "style guide"
from CSS. All styles must be modular and only a single `styles.css` file should be emitted.

The original style guide can be viewed in the [`resources`](./resources) folder and the live demo can been seen
[here](https://adamelliotfields.github.io/treehouse-style-guide/resources/index.html).

The HTML and CSS code must pass W3C validation.

## Usage

You can view hosted site [here](https://adamelliotfields.github.io/treehouse-style-guide/index.html).

You can also simply open `index.html` in your browser directly. For example, if your macOS user name
is `adam` and you cloned the repo in `~/Downloads`, then go to
`file:///Users/adam/Downloads/treehouse-style-guide/index.html` in your web browser.

You can also use PHP or Python's built-in HTTP server by running one of these commands in the same
directory as `index.html`.

```bash
# PHP
php -S localhost:8000

# Python 2
python -m SimpleHTTPServer

# Python 3
python3 -m http.server
```

## Local Development

The build pipeline consists of Gulp and Dart Sass with Browser Sync providing the local development
server and live reloading. You can view the Gulpfile [here](./Gulpfile.js).

Note that you must have Node.js v12.10.0 or later installed (v12.10 was release in September 2019,
so you should be good).

```bash
npm install

# Start the local development server.
npm start

# Compile Sass to CSS without starting the server.
npm run build
```

## Validating HTML and CSS

Use the [W3C HTML](https://validator.w3.org/#validate_by_input) and
[W3C CSS](https://jigsaw.w3.org/css-validator/#validate_by_input) validators by pasting the code
into the text input.

## Browser Compatibility

- Chrome 84
- Firefox 79
- Safari 13
