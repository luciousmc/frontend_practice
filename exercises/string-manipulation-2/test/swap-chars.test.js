var expect = require('chai').expect;
var swapChars = require('../swap-chars');

describe.skip('swapChars(firstIndex, secondIndex, string)', function () {

  it('swaps the "l" and "o" in "lodash"', function () {
    var result = swapChars(0, 1, 'lodash');
    expect(result).to.equal('oldash');
  });

  it('swaps the "R" and "t" of "React"', function () {
    var result = swapChars(0, 4, 'React');
    expect(result).to.equal('teacR');
  });

  it('swaps the "L" and "F" of "LearningFuze"', function () {
    var result = swapChars(0, 8, 'LearningFuze');
    expect(result).to.equal('FearningLuze');
  });

  it('swaps the "J" and "R" in "HTML, CSS, JavaScript, React"', function () {
    var result = swapChars(11, 23, 'HTML, CSS, JavaScript, React');
    expect(result).to.equal('HTML, CSS, RavaScript, Jeact');
  });

});
