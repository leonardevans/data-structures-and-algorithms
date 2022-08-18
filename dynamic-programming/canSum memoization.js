/*
Write a function `canSum(targetSum, numbers)` that btakes in a targetSum and an array of numbers as arguments

The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array

You may use an element of the array as many times as needed

You may assume that all input numbers are nonnegative

Example 1
canSum(7, [5, 3, 4, 7]) returns true
3+4 = 7
7 = 7

Example 2
canSum(7, [2, 4]) returns false

*/

// brute force algorithm  
const canSum = (targetSum, numbers) => {
    if (targetSum === 0) return true

    if (targetSum < 0) return false

    for (let num of numbers){
        const remainder = targetSum - num
        if (canSum(remainder, numbers) === true) return true
    }
    return false
} // Time: O(n^m), Space: O(m) where m = targetSum and n = length of the array

// console.log(canSum(7, [2, 3])) // true
// console.log(canSum(7, [5, 3, 4, 7])) // true
// console.log(canSum(7, [2, 4])) // false
// console.log(canSum(8, [2, 3, 5])) // true
// console.log(canSum(300, [7, 14])) // false


// memoized algorithm  
const canSumMemo = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return true
    if (targetSum < 0) return false

    for (let num of numbers){
        const remainder = targetSum - num
        if (canSumMemo(remainder, numbers, memo) === true) {
            memo[targetSum] = true
            return true
        }
    }
    memo[targetSum] = false
    return false
} // Time: O(m*n), Space: O(m) where m = targetSum and n = length of the array

console.log(canSumMemo(7, [2, 3])) // true
console.log(canSumMemo(7, [5, 3, 4, 7])) // true
console.log(canSumMemo(7, [2, 4])) // false
console.log(canSumMemo(8, [2, 3, 5])) // true
console.log(canSumMemo(300, [7, 14])) // false