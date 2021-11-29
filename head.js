const assertEqual = require('./assertEqual')

// Return the first element of an array
const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
};

module.exports = head;