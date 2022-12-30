
// Write a function `fib(n)` that takes in a number os an argument 
// The function should retur the n-th number of the Fibonacci sequence
// The first and the second number of the sequence is 1
// To generate the next number of the sequence, we sum the previous two

const fib = (n) => {
    if (n <= 2) return 1

    return fib(n-1) + fib(n-2)
} // Time: O(2^n), Space: O(n)


// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));
// console.log(fib(6));
// console.log(fib(50));

// using memoization

const fibMemo = (n, memo = {}) => {
    //check if the key n is in the memo object
    if(n in memo) return memo[n]

    if (n <= 0) return 0

    if (n <= 2) return 1

    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo)

    return memo[n]
} // Time: O(n), Space: O(n)

console.log(fibMemo(6));
console.log(fibMemo(7));
console.log(fibMemo(8));
console.log(fibMemo(1000));