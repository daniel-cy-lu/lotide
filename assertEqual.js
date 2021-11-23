// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(String.fromCodePoint(0x1F628) + 'Assertion Failed: ' + actual + ' !== ' + expected);
  } else {
    console.log(String.fromCodePoint(0x1F60D) + 'Assertion Passed: ' + actual + ' === ' + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('hi', 'hi');
assertEqual('hi', 'hello');
assertEqual(13, 13);
assertEqual(1, 13);