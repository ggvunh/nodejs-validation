var expect = require('chai').expect;
var validation = require('../src/validation.js');

describe('validation', function () {

  describe('isNumber()', function () {

    it('return error when not number', function(done) {

      validation.isNumber('abc', function(err, rs) {

        expect(err.message).to.equal('abc is not a number');
        expect(rs).equal(false);
        done();
      });
    });

    it('return true when number', function(done) {

      validation.isNumber(4, function(err, rs) {
        expect(err).to.equal(null);
        expect(rs).to.equal(true);
        done();
      })
    })
  });

  describe('between()', function() {

    it('return false if param invaid', function(done) {

      validation.between('a', 1, 4, function(err, rs) {

        expect(err.message).to.equal('params invaid');
        expect(rs).to.equal(false);
        done();
      })
    })

    it('return false when n invaid', function(done) {

      validation.between(2, 5, 1, function(err, rs) {

        expect(err.message).to.equal('1 not between 2 and 5');
        expect(rs).to.equal(false);
        done();
      })
    });

    it('return true when min is 2 max is 5 n is 3', function(done) {

      validation.between(2, 5, 3, function(err, rs) {

        expect(err).to.equal(null);
        expect(rs).to.equal(true);
        done();
      })
    })
  });
})
