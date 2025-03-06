// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
// Example 1:

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:

// Input: 
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.

const createCounterStep = function(n) {
  return function() {
      return n++;
  };
};

const counter = createCounterStep(5);
console.log(counter());
console.log(counter());
console.log(counter());

// 
/* 
Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
 */

const createHelloWorld = function() {
  return function(...args) {
      return 'Hello World'
  }
};

const fn = createHelloWorld();

console.log(fn());
console.log(fn({}, null, 42));

/*
Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 

Example 1:

Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.
Example 2:

Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null so this expression throw the error "Not Equal".
Example 3:

Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null so this expression returns true. 
 */

const expect = function(val) {
  return {
      toBe: function (expected) {
        if (val === expected) {
        return true;
      }
      throw new Error("Not Equal");
    },
    notToBe: function (expected) {
      if (val !== expected) {
        return true;
      }
      throw new Error("Equal");
    },
  }
};

/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 

Example 1:

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
Example 2:

Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1,2,1,0,0]
Explanation:
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0 
 */

const createCounter = function(init) {
  let current = init;

  return {
      increment: function() {
          return ++current;
      },
      decrement: function() {
          return --current
      },
      reset: function() {
          return current = init;
      }
  }
};


const secondCounter = createCounter(10);

console.log(secondCounter.increment());
console.log(secondCounter.reset());
console.log(secondCounter.decrement());


/*
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

 

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
Example 2:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
Example 3:

Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42. 
 */

const map = function(arr, fn) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i], i));
  }
  
  return result;
};

function addOne(item, index) {
  return item++;
}

function constant() { return 42; }

const arr = [1,2,3];

const newArray = map(arr, addOne);
console.log(newArray);


/*
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.

 

Example 1:

Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
Example 2:

Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0
Example 3:

Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]
Explanation:
Falsey values such as 0 should be filtered out 
 */

const filter = function(arr, fn) {
  let newArray = [];

  for(let i = 0; i < arr.length; i++ ) {
      if(fn(arr[i], i)) {
          newArray.push(arr[i]);
      }
      
  }

  return newArray
};

function filterCheck(item, index) {
  return item > 10;
}

function firstIndex(n, i) { 
  return i === 0; 
}

function plusOne(n) { return n + 1; }

const inputFirstFilter = [0,10,20,30];
const inputSecondFilter = [1,2,3];
const inputThirdFilter = [-2,-1,0,1,2];


console.log(filter(inputFirstFilter, filterCheck));
console.log(filter(inputSecondFilter, firstIndex));
console.log(filter(inputThirdFilter, plusOne));





