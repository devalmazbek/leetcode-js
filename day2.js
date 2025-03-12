/*
Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.

 

Example 1:

Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
Output: 10
Explanation:
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.
Example 2:

Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
Output: 130
Explanation:
initially, the value is init=100.
(100) + nums[0] * nums[0] = 101
(101) + nums[1] * nums[1] = 105
(105) + nums[2] * nums[2] = 114
(114) + nums[3] * nums[3] = 130
The final answer is 130.
Example 3:

Input: 
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
Output: 25
Explanation: For empty arrays, the answer is always init. 
 */

function reduce(nums, fn, init) {
    if (nums.length === 0) {
        return init;
    }

    if(nums.length === 1 && nums[0] === 0) return 0;

    let val = init;

    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]); 
        console.log(val);
    }

    return val;
};

const nums = [1, 2, 3, 4];

function sum(accum, curr) { return accum + curr; }

function sum2(accum, curr) { return accum + curr * curr; }

console.log(reduce(nums, sum, 0));
console.log(reduce(nums, sum2, 100));


/*
Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

 

Example 1:

Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
Example 2:

Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
Example 3:

Input: functions = [], x = 42
Output: 42
Explanation:
The composition of zero functions is the identity function 
 */

const compose = function(functions) {
    
    return function(x) {
        let result = x;

        if(functions.length === 0) return x;
        
        for(let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }

        return result;
    }
};


const fn1 = x => x + 1;
const fn2 = x => x * x;
const fn3 = x => x * 2;

const composeUse = compose([fn1, fn2, fn3]);
const composeUseEmpty = compose([]);

console.log(composeUse(4));

console.log(composeUseEmpty(10));
