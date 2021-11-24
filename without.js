const without = function(source, itemsToRemove) {
  let removedSource = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < removedSource.length; j++) {
      if (itemsToRemove[i] === removedSource[j]) {
        removedSource.splice(j,1);
      }
    }
  }
  console.log(removedSource);
};

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

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
