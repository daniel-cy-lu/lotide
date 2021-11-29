const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(result, ["Lighthouse", "Labs"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertArraysEqual(tail(words), ['Lighthouse', 'Labs']);