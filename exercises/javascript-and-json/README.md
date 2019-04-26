# javascript-and-json

Converting data to and from strings.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/javascript-and-json` directory in your terminal.

### Exercise

1. Read about JSON at [https://www.json.org/](https://www.json.org/).
2. Read about JSON [in the MDN WebDocs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/JSON).
3. Read about [Serialization and its uses](https://en.wikipedia.org/wiki/Serialization) on Wikipedia. See if you can find JSON mentioned anywhere on the page.
4. Create an `index.html` containing a basic skeleton and add a `script` tag with a `src` attribute of `"main.js"`.
5. Within `main.js`:
    - Create an `Array` of three plain `Objects` representing books.
    - Give each book an `isbn`, a `title`, and an `author` (all `Strings`).
    - Use [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) to create a JSON `String` of your books `Array` and log the result to the console.
    - Create a `String` in JSON format holding data representing a student with a `Number id` and a `String name`.
    - Use [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) to create a JavaScript `Object` from your JSON `String` and log the result to the console.

### Submitting Your Solution

When your solution is complete, return to the root of your `senior-front-end-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What is JSON?
- What are serialization and deserialization and why are they useful?
- How to you serialize data into a JSON string using JavaScript?
- How do you deserialize a JSON string using JavaScript?
