const assertArraysEqual = require('./assertArraysEqual')

const tail = function(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let newArr = arr.slice(1);
  return newArr;
};

module.exports = tail;

