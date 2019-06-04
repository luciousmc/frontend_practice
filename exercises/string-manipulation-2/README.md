# string-manipulation-2

JavaScript string manipulation practice with unit tests.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/string-manipulation-2` directory in your terminal.

### Exercise

Remember, `String`s [are Array-like](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Character_access) and have a lot of [useful methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods_2).

To begin, download the dependencies listed in `package.json` with the `npm install` command. Then examine the `"scripts"` included in `package.json`. `"test"` runs the [`mocha`](https://mochajs.org/) testing framework once; `"tdd"` runs `mocha` in `--watch` mode to automatically re-run tests when file changes are detected. Run the `"test"` script with `npm` and `mocha` will run once.

1. ### `truncate(length, string)`

    Cuts `string` down to at most `length` characters long and appends an ellipsis (`...`).

    #### Parameters

    - `length` - an integral JavaScript `Number`
    - `string` - any JavaScript `String`

    #### Return Value

    - A shortened version of `string`, plus in an ellipsis.

    #### Examples

    ```js
    truncate(8, 'All Code All Day')              // -> "All Code..."
    truncate(15, 'HTML, CSS, JavaScript, React') // -> "HTML, CSS, Java..."
    truncate(1, 'React')                         // -> "R..."
    truncate(3, 'Angular')                       // -> "Ang..."
    truncate(5, '')                              // -> "..."
    truncate(20, 'LearningFuze')                 // -> "LearningFuze..."
    ```

1. ### `capitalizeWord(word)`

    #### Parameters

    - `word` - A single word as a JavaScript `String`

    #### Return Value

    Returns `word` with its first character uppercased and the rest of its characters lowercased. **JavaScript** is _always_ cased as **JavaScript**.

    #### Examples

    ```js
    capitalizeWord('foo')        // -> "Foo"
    capitalizeWord('BAR')        // -> "Bar"
    capitalizeWord('bAZ')        // -> "Baz"
    capitalizeWord('qUx')        // -> "Qux"
    capitalizeWord('jaVAsCrIPt') // -> "JavaScript"
    capitalizeWord('javaScript') // -> "JavaScript"
    capitalizeWord('JavascRipt') // -> "JavaScript"
    ```

### Submitting Your Solution

When your solution is complete, return to the root of your `senior-front-end-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).
