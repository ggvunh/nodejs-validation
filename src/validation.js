
var isNumber = (n, cb) => {

  if (isNaN(n)) {

    return cb(new Error(n + ' is not a number'), false);
  }
  return cb(null, true);
};

var between = (min, max, n, cb) => {

  if (isNaN(min) || isNaN(max) || isNaN(n)) {

    return cb(new Error('params invaid'), false);
  }

  if (n < min || n > max) {

    return cb(new Error(n + ' not between ' + min + ' and ' + max), false);
  }

  return cb(null, true);
};

module.exports = {
  isNu: isNumber,
  bet: between
};
