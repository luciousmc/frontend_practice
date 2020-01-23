/* eslint-disable no-console, no-unused-vars */

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var names = [
  'Bill',
  'Monique',
  'Dan',
  'TJ',
  'Scott',
  'Tim H.',
  'Cody',
  'Brett',
  'Andy',
  'Tim D.'
];

var evenNumbers = numbers.filter(value => value % 2 === 0);
console.log('evenNumbers array is: ', evenNumbers);

var overFive = numbers.filter(value => value > 5);
console.log('overFive array is: ', overFive);
