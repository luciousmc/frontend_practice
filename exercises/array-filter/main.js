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

var evenNumbers = numbers.filter(numbers => numbers % 2 === 0);
console.log('Even Numbers - ', evenNumbers);

var overFive = numbers.filter(numbers => numbers > 5);
console.log('Numbers > 5 - ', overFive);

var startWithT = names.filter(names => names.startsWith('T'));
console.log('Starts with T (startsWith method) - ', startWithT);

var haveD = names.filter(names => names.includes('d') || names.includes('D'));
console.log('Includes letter D - ', haveD);
