const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(String.fromCodePoint(0x1F628) + `Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(String.fromCodePoint(0x1F60D) + `Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for (let key in obj) {
    if (key === undefined) {
      return undefined;
    }
    if (callback(obj[key]) === true) {
      return key;
    }
  }
};

//test case I
const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"
assertEqual(result, 'noma');

//test case II
const result2 = findKey({}, x => x.stars === 2);
assertEqual(result2, undefined);