/* global expect, toObject */

describe('toObject(keyValuePair)', function () {

  beforeEach(function () {
    expect(toObject).to.be.a('function');
  });

  it('creates a Dan object', function () {
    var output = toObject(['firstName', 'Daniel']);
    expect(output).to.deep.equal({
      firstName: 'Daniel'
    });
  });

  it('creates a cool object', function () {
    var output = toObject(['isCool', true]);
    expect(output).to.deep.equal({
      isCool: true
    });
  });

  it('creates an employee object', function () {
    var output = toObject(['employer', 'LearningFuze']);
    expect(output).to.deep.equal({
      employer: 'LearningFuze'
    });
  });

});
