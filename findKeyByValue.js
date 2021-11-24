const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(String.fromCodePoint(0x1F628) + `Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(String.fromCodePoint(0x1F60D) + `Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  let key = '';
  for (const ele in obj) {
    if (obj[ele] === val) {
      key = ele;
    }
  }
  return key;
};

const bestTVShowsByGenre = {
  sciFi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire'
};

assertEqual('comedy', findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine')); //Assertion Passed
assertEqual('sciFi', findKeyByValue(bestTVShowsByGenre, 'The Expanse')); //Assertion Passed
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); //Assertion Failed