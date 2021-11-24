const eqArrays = function(arr1, arr2) {
  if ((!arr1) || (!arr2)) {
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


const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(String.fromCodePoint(0x1F628) + `Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(String.fromCodePoint(0x1F60D) + `Assertion Passed: ${actual} === ${expected}`);
  }
};

const middle = function(array) {
  if (array.length === 0 || array.length === 1) {
    return "";
  }

  if (array.length % 2 === 0) {
    return array.slice((((array.length + 1) / 2) - 1), (((array.length + 1) / 2) + 1));
  } else if (array.length % 2 !== 0) {
    return array.slice(array.length / 2, (array.length / 2) + 1);
  }
}

console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6, 7]));