Cycle Start Kit
===============

Very template for [CycleJS](http://cycle.js.org/) projects.

Why
---

The goal of this repository is to provide a very simple stup without any clutter while still being a useful for a realworld project.

Usage
-----

Run `npm run watch` in order to start up the local web server and then open `http://localhost:8080` in your browser.

Used Packages
-------------

This project uses the following packages:

```js
"dependencies": [
  "@cycle/dom", // CycleJS DOM driver
  "@cycle/isolate", // For handling CycleJS sub components
  "@cycle/xstream-run", // Adapter to use CycleJS with xstream
  "xstream", // Reactive programming library
],
"devDependencies": [
  "babel-preset-es2015", // For ES6 syntax features
  "babel-plugin-transform-object-rest-spread", // For easier object cloning syntax
  "babelify", // For ES6 compilation
  "browserify", // For Module bundler
  "browserify-hmr", // Hot Reloading
  "cssnano", // CSS minification
  "http-server", // Serving files via localhost instead of filesystem
  "npm-run-all", // Running multiple build commands in parallel
  "postcss-cli", // CSS processing
  "uglifyify", // JS minification
  "watchify", // JS live recompilation
]
```
