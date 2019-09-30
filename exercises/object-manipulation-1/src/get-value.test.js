/* global expect, getValue */

describe('getValue(object, key)', function () {

  beforeEach(function () {
    expect(getValue).to.be.a('function');
  });

  it('returns the value of Dan\'s "firstName" property', function () {
    var dan = {
      firstName: 'Daniel',
      lastName: 'Pashcal'
    };
    var output = getValue(dan, 'firstName');
    expect(output).to.equal('Daniel');
  });

  it('returns the value of Dan\'s "lastName" property', function () {
    var dan = {
      firstName: 'Daniel',
      lastName: 'Paschal'
    };
    var output = getValue(dan, 'lastName');
    expect(output).to.equal('Paschal');
  });

  it('returns the "latitude" of LearningFuze', function () {
    var learningFuze = {
      latitude: 33.6349,
      longitude: 117.7405
    };
    var output = getValue(learningFuze, 'latitude');
    expect(output).to.equal(33.6349);
  });

  it('returns the "longitude" of LearningFuze', function () {
    var learningFuze = {
      latitude: 33.6349,
      longitude: 117.7405
    };
    var output = getValue(learningFuze, 'longitude');
    expect(output).to.equal(117.7405);
  });

  it('returns undefined for non-existent property keys', function () {
    var tim = {
      name: 'Tim',
      language: 'JavaScript'
    };
    var output = getValue(tim, 'yearsExperience');
    expect(output).to.equal(undefined);
  });

});
