var expect = require('chai').expect;
var reverseWords = require('../reverse-words');

describe.skip('reverseWords(string)', function () {

  it('reverses the words in "What is unit testing?"', function () {
    var input = 'What is unit testing?';
    var output = reverseWords(input);
    expect(output).to.equal('?gnitset tinu si tahW');
  });

  it('reverses the words in "follow your passion"', function () {
    var input = 'follow your passion';
    var output = reverseWords(input);
    expect(output).to.equal('noissap ruoy wollof');
  });

  it('reverses the words in "All Code All Day"', function () {
    var input = 'All Code All Day';
    var output = reverseWords(input);
    expect(output).to.equal('yaD llA edoC llA');
  });

  it('reverses the words in "Hello, how are you?"', function () {
    var input = 'Hello, how are you?';
    var output = reverseWords(input);
    expect(output).to.equal('?uoy era woh ,olleH');
  });

});
