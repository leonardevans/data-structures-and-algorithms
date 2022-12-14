
// Complex Recursion
// Learning Objectives
/*
Explore a recursive array algorithm
Visualize multibranch recursion
*/

// Sum
/*
Write a function `sum` that takes an array of numbers as an input. The function should return the total sum of all elements
The function must be recursive

sum([1, 5, 7, -2]); //11
sum([6, 3, 1]); //10
sum([]) = 0
sum([1]) = 1
sum([1, 5]) = 6
sum([1, 5, 7]) = 13
sum([1, 5, -2]) = 11

sum([5, 7]) = 12
sum([1, 5, 7]) = 1 + 12

sum([1, 5, 7]) = 1 + sum([5, 7])

sum([a, b, c, d, ...]) = a + sum([b, c, d, ...])
*/

// O(n^2)
const slowSum = (array) => {
    if ( array.length === 0) return 0;
    const restEl = array.slice(1);
    return array[0] + slowSum(restEl);
}
// console.log(slowSum([1, 5, 7, -2]));
// Time: O(n*n) = O(n^2)
// SPace: O(n)


// O(n)
const fastSum = (array) => {
    return _sum1(array, 0);
}

const _sum1 = (array, index) => {
    if (index === array.length) return 0;
    return array[index] + _sum1(array, index + 1);
}
// console.log(fastSum([1, 5, 7, -2]));
// Time: O(n)
// Space: O(n)


// Testing and comparing the two solutions
const input = Array(9000).fill(1);

const slowStart = Date.now();
console.log(slowSum(input));
const slowEnd = Date.now();
console.log(`O(n^2) finished in: ${slowEnd - slowStart}ms`);

const fastStart = Date.now();
console.log(fastSum(input));
const fastEnd = Date.now();
console.log(`O(n) finished in: ${fastEnd - fastStart}ms`);


// fibonacci 
/*
Write a function `fibonacci` that takes in a number, n, and returns the nth number in the fibonacci sequence.
The first two numbers of the fibonacci sequence are 1 and 1. The next number of the sequence can be calculated by taking the sum of the previous two

fib(1); // 1
fib(2); // 1
fib(3); // 2
fib(4); // 3
fib(5); // 5
fib(6); // 8
fib(7); // 13

fib(6) = fib(5) + fib(4)
fib(n) = fib(n-1) + fib(n-2)
*/

const fib = (n) =>{
    if( n === 1 || n ===2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(5));
console.log(fib(6));

// Time: O(2^n)
// Space: O(n)

// Recap
/*
Reviewd the structure of recursion
Visualized multibranch recursion
*/ 
