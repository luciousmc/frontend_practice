/* eslint-disable no-console */
const books = [
  {
    title: null,
    isbn: null,
    author: null
  },
  {
    title: null,
    isbn: null,
    author: null
  },
  {
    title: null,
    isbn: null,
    author: null
  }
];
const output = JSON.stringify(books);
console.log('JSON stringify returns: ', output);

const student = '{"id": 30, "name": "Brian"}';

const output2 = JSON.parse(student);
console.log('JSON parse returns: ', output2);
