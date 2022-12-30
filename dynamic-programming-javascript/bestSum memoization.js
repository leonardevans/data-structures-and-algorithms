/*
Write a function `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments

The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum

If there is a tie for the shortest combination, you may return any one of the shortest

Example 1
bestSum(7, [5, 3, 4, 7])
[3, 4] , [7]
returns [7]

Example 2
bestSum(8, [2, 3, 5])
[2, 2, 2, 2] , [2, 3, 3] , [3, 5]
returns [3, 5]
*/

// brute force algorithm
const bestSum = (targetSum, numbers) => {
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    let shortestCombination = null

    for (let num of numbers){
        const remainder = targetSum - num
        const remainderCombination = bestSum(remainder, numbers)

        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num]

            //if the combination is shorter than the current shortest combination, update it
            if (shortestCombination === null || combination.length < shortestCombination.length) shortestCombination = combination
        }
    }

    return shortestCombination
}  // Time: O((n^m)*m), Space: O(m^2) where m = targetSum and n = length of the array 

// console.log(bestSum(7, [5, 3, 4, 7])) // [7]
// console.log(bestSum(8, [2, 3, 5])) // [3, 5]
// console.log(bestSum(8, [1, 4, 5])) // [4, 4]
// console.log(bestSum(100, [1, 2, 5, 25])) // [25, 25, 25, 25]


// memoized algorithm
const bestSumMemo = (targetSum, numbers, memo= {}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    let shortestCombination = null

    for (let num of numbers){
        const remainder = targetSum - num
        const remainderCombination = bestSumMemo(remainder, numbers, memo)

        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num]

            //if the combination is shorter than the current shortest combination, update it
            if (shortestCombination === null || combination.length < shortestCombination.length) shortestCombination = combination
        }
    }

    return memo[targetSum] = shortestCombination
}  // Time: O((m^2 *n), Space: O(m^2) where m = targetSum and n = length of the array 

console.log(bestSumMemo(7, [5, 3, 4, 7])) // [7]
console.log(bestSumMemo(8, [2, 3, 5])) // [3, 5]
console.log(bestSumMemo(8, [1, 4, 5])) // [4, 4]
console.log(bestSumMemo(100, [1, 2, 5, 25])) // [25, 25, 25, 25]