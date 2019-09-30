/* global expect, getValues */

describe('getValues(object)', function () {

  beforeEach(function () {
    expect(getValues).to.be.a('function');
  });

  it('returns Dan\'s property values', function () {
    var dan = {
      firstName: 'Daniel',
      lastName: 'Paschal'
    };
    var output = getValues(dan);
    expect(output)
      .to.be.an('array')
      .with.length(2)
      .that.includes('Daniel')
      .and.includes('Paschal');
  });

  it('returns LearningFuze\'s property values', function () {
    var learningFuze = {
      latitude: 33.6349,
      attitude: 'sanguine',
      longitude: 117.7405
    };
    var output = getValues(learningFuze);
    expect(output)
      .to.be.an('array')
      .with.length(3)
      .that.includes(33.6349)
      .that.includes('sanguine')
      .and.includes(117.7405);
  });

  it('returns Tim\'s property values', function () {
    var tim = {};
    var output = getValues(tim);
    expect(output).to.deep.equal([]);
  });

});
