// assertArraysEqual() is used to show test cases results
const eqArrays = function(arr1, arr2) {
  if ((!arr1) || (!arr2)) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } else {
      return true;
    }
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === false) {
    console.log(String.fromCodePoint(0x1F628) + `Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(String.fromCodePoint(0x1F60D) + `Assertion Passed: ${actual} === ${expected}`);
  }
};

//Code for takeUntil()
const takeUntil = function(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      return array.slice(0, i);
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual([1,2,5,7,2], results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual([ 'I\'ve', 'been', 'to', 'Hollywood' ], results2);