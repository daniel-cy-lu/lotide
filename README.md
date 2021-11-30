# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @daniel_cy_lu/lotide`

**Require it:**

`const _ = require('@daniel_cy_lu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: takes in an array and return the first element
* `tail(arr)`: takes in an array and return the elements other than the first one
* `middle(arr)`: takes in an array and return the middle element
* `assertArraysEqual(arr1, arr2)`: determine whether two arrays are the same and return either pass or fail
* `assertEqual(a,b)`: determine whether two primitive-data-type values are the same and return either pass or fail
* `assertObjectsEqual(obj1, obj2)`: determine whether two objects are the same and return either pass or fail
* `countLetters(sen)`: return the number of letters, excluding blank space in a sentence as an input
* `countOnly(allItems, itemsToCount)`: allItems is an object with items to be counted as the keys and number as value. The itemsToCount is an object that could share keys with the first object and boolean value. The function will return the number counted for the shared keys that has 'true' as value in itemToCount
* `eqArrays(arr1, arr2)`: determine whether two arrays are the same and return either true or false
* `eqObjects(obj1, obj2)`: determine whether two objects are the same and return either true or false
* `findKey(obj, callback)`: the function will loop through the object and perform the callback function using each key and only return the first true condition 
* `findKeyByValue(obj,key)`: return the key if it matches one in the object argument
* `letterPositions(sen)`: returns all the indexes of each letter that appear in the sentence input
* `map(arr, callback)`: return a new array which is the mutated value of each element in the original array based on the callback function
* `takeUntil(arr, val)`: return the part of array from the start until the value argument
* `without(arr1, arr2)`: return the array1 without the contains in array2