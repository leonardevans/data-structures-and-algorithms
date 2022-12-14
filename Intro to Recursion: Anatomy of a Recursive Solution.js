
// Recursion
// Important of recursion in data structures and algorithms
/*
Helps us implement solutions in some tough problems in an elegant way
It acts as a baseline for which we implement other more advanced algorithms
*/

//    Learning Objectives
/*
Review the basic recursive structure
*/ 

// Why Use Recursion
/*
It breaks down large problems into small chunks that are easier to solve
It is a fundamental used in more advanced algorithms
*/ 


// When to use recursion
/*
For problems that contain smaller instances of the same problem
*/ 

// Anatomy Of Recursion
/*
Base Case: The 'smallest' instance of a problem that is solved trivially
Recursive Case: an instance of a problem that 'shrinks' the size of the input towards the base case
*/

// factorial
/*
Write a function 'factorial' that takes a number as an argument and returns the factorial of that number
The factorial of `n` is the product of all positive numbers from 1 to `n`

factorial(1); // 1
factorial(2); // 2
factorial(3); // 6
factorial(4); // 24
factorial(5); // 120

factorial(5) = 5 * factorial(4)
factorial(4) = 4 * factorial(3)
factorial(3) = 3 * factorial(2)
factorial(2) = 2 * factorial(1)
factorial(1) = 1

factorial(n) = n * factorial(n-1)
*/ 

const factorial = (n) => {
    if (n === 1) return 1;

    return n * factorial(n-1);
}

console.log(factorial(1)); //1
console.log(factorial(2)); //2
console.log(factorial(3)); //6
console.log(factorial(4)); //24
console.log(factorial(5)); //120 

// Time: O(n)
// Space: O(n)

// Recap 
/*
Reviewd the structure of simple recursion 
*/