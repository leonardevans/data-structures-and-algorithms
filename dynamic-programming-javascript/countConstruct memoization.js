/*
Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings

The function should return the number of ways that the `target` can be constructed by concatenating elements of the `wordBank` array

You may reuse elements of `wordBank` as many times as needed

Example
canConstruct(purple, [purp, p, ur, le, purpl])
returns 2
*/

// brute force algorithm
const countConstruct = (target, wordBank) => {
    if (target === '') return 1

    let totalCount = 0

    for (let word of wordBank){
        if (target.substr(0, word.length) === word){
            let newTarget = target.substr(word.length)
            totalCount += countConstruct(newTarget, wordBank)
        }

        
    }

    return totalCount
}// Time: O(n^m  * m) , Space: O(m^2) where m = target.length and n = wordBank.length

// console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
// console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
// console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // 0
// console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // 4
// console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // 0


// memoized algorithm
const countConstructMemo = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target]

    if (target === '') return 1

    let totalCount = 0

    for (let word of wordBank){
        if (target.substr(0, word.length) === word){
            let newTarget = target.substr(word.length)
            totalCount += countConstructMemo(newTarget, wordBank, memo)
        }
    }

    return memo[target] = totalCount
} // Time: O(n * m^2) , Space: O(m^2) where m = target.length and n = wordBank.length

console.log(countConstructMemo('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(countConstructMemo('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(countConstructMemo('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // 0
console.log(countConstructMemo('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // 4
console.log(countConstructMemo('eeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // 0