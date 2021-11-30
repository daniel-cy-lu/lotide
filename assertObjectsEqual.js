const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(String.fromCodePoint(0x1F628) + `Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(String.fromCodePoint(0x1F60D) + `Assertion Passed: ${actual} === ${expected}`);
  }
};

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

const eqObjects = function(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  //console.log('Obj', obj1Keys, obj2Keys)
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (const ele of obj1Keys) {
    if (Array.isArray(obj1[ele]) && Array.isArray(obj2[ele])) {
      if (eqArrays(obj1[ele], obj2[ele]) !== true) {
        return false;
      }
    } else {
      if (obj1[ele] !== obj2[ele]) {
        return false;
      }
    }
  }

  // for (const keys in obj1) {
  //   if (obj1[key] !== obj2[key]){
  //     return false;
  //   }
  // }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === false) {
    console.log(String.fromCodePoint(0x1F628) + `Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(String.fromCodePoint(0x1F60D) + `Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

// assertObjectsEqual({name : 'Daniel', age : 35}, {name : 'Daniel', age : 35});

assertObjectsEqual({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });

module.exports = assertObjectsEqual;