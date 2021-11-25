//assertArrayEqual to compare two arrays and see if they are the same.
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

//Created map function to work the same as Map method

const map =  function(array, callback) {
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
};

//test case I
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

assertArraysEqual(results1, words.map(word => word[0]));

//test case II
const array2 = [1,2,3,4,5];
const result2 = map(array2, x => x + 1);

assertArraysEqual(result2, array2.map(x => x + 1));

//test case III
const array3 = [true, false, false, false, true];
const result3 = map(array3, x => x === true ? false : true);

assertArraysEqual(result3, array3.map(x => x === true ? false : true));