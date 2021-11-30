const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(String.fromCodePoint(0x1F628) + `Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(String.fromCodePoint(0x1F60D) + `Assertion Passed: ${actual} === ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let newObj = {};
  for (const trueKey in itemsToCount) {
    if (itemsToCount[trueKey] === true) {
      newObj[trueKey] = 0;
    }
  }

  for (const item of allItems) {
    for (const matchKey in newObj) {
      if (item === matchKey) {
        newObj[matchKey] += 1;
      }
    }
  }
  let noZero = {};
  for (const item in newObj) {
    if (newObj[item] > 0) {
      noZero[item] = newObj[item];
    }
  }
  return noZero;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;