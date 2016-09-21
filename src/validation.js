var isNumber = function(n, cb) {

  if (isNaN(n)) {

    return cb(new Error( n + ' is not a number'), false);
  } else {

    return cb(null, true);
  }
};

var between = function (min, max, n, cb) {

  if (isNaN(min) || isNaN(max) || isNaN(n)) {

    return cb(new Error('params invaid'), false);
  } else {

    if (n < min || n > max) {

      return cb(new Error( n + ' not between ' + min + ' and ' + max), false);
    } else {

      return cb(null, true);
    }
  }
}

module.exports = {
  isNumber: isNumber,
  between: between
}
