var expect = require('chai').expect;
var validation = require('../src/validation.js');

describe('validation', () => {

  describe('isNumber()', () => {

    it('return error when not number', (done) => {

      validation.isNu('abc', (err, rs) => {

        expect(err.message).to.equal('abc is not a number');
        expect(rs).equal(false);
        done();
      });
    });

    it('return true when number', (done) => {

      validation.isNu(4, (err, rs) => {
        expect(err).to.equal(null);
        expect(rs).to.equal(true);
        done();
      });
    });
  });

  describe('between()', () => {

    it('return false if param invaid', (done) => {

      validation.bet('a', 1, 4, (err, rs) => {

        expect(err.message).to.equal('params invaid');
        expect(rs).to.equal(false);
        done();
      });
    });

    it('return false when n invaid', (done) => {

      validation.bet(2, 5, 1, (err, rs) => {

        expect(err.message).to.equal('1 not between 2 and 5');
        expect(rs).to.equal(false);
        done();
      });
    });

    it('return true when min is 2 max is 5 n is 3', (done) => {

      validation.bet(2, 5, 3, (err, rs) => {

        expect(err).to.equal(null);
        expect(rs).to.equal(true);
        done();
      });
    });
  });
});
