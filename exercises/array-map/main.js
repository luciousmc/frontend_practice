/* eslint-disable no-console, no-unused-vars */

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

var doubled = numbers.map(val => val * 2);
console.log('the doubled array is: ', doubled);

var prices = numbers.map(val => {
  var output = '$';
  output += val.toFixed(2);
  return output;
});
console.log('the prices array is: ', prices);
