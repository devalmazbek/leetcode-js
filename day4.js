// Add Two Promises

/*
Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 

Example 1:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
Output: 7
Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
Example 2:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
Output: -2
Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2. 
 */

const addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1, promise2]).then(([value1, value2]) => value1 + value2);
};

const p1 = Promise.resolve(3);
const p2 = Promise.resolve(5);

addTwoPromises(p1, p2).then(function(data) {
    console.log(data);
});


// Sleep
/* Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

 

Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
  */
async function sleep(millis) {
    const resolve = await new Promise(function(resolve, reject) {
        setTimeout(() => resolve(millis), millis);
    })

    return resolve;
}

let t = Date.now()
 sleep(100).then((time) => console.log(time)) // 100
 sleep(200).then((time) => console.log(time)) // 200