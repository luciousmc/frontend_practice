# webpack-intro

Using Webpack to build front end projects.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/webpack-intro` directory in your terminal.

### Exercise

1. Read [Sections 2 and 3](http://2ality.com/2014/09/es6-modules-final.html#ecmascript-6-modules) of Dr. Axel Rauschmayer's article on the syntax of ECMAScript 6 modules.
2. Read about [Webpack](https://webpack.js.org/concepts/why-webpack/) and [modules](https://webpack.js.org/concepts/modules/) in Webpack's documentation.
3. Create a new `package.json` with `npm`.
4. Install the `jquery` package as a `dependency`.
5. [Install `webpack`](https://webpack.js.org/guides/installation/) and the `webpack-cli` as [`devDependencies`](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file).
6. Check your `package.json` to confirm that `jquery` is a `dependency` and `webpack`/`webpack-cli` are `devDependencies`.
7. Add an NPM script to `package.json` named `"build"` that executes `webpack` like this:
    ```json
    "scripts": {
      "build": "webpack",
      "test": "echo \"Error: no test specified\" && exit 1"
    }
    ```
8. Try your NPM script from the command line and look for a `main.js` file in `dist/`.
    ```shell
    npm run build
    ```
9. Open `dist/index.html` in your browser.

![Webpack Intro Solution](webpack-intro-solution.gif)

### Submitting Your Solution

When your solution is complete, return to the root of your `senior-front-end-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What is an ES6 module?
- What is Webpack and how are modules different in Webpack?
- How do you add a `devDependency` to a package?
- What is an NPM script?
- How do you bundle front end code with NPM and Webpack?
