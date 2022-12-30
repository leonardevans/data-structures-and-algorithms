/*
Write a function `allConstruct(target, wordBank)` that accepts a target string and an array of strings

The function should return a 2D array containing all the ways that the `target` can be constructed by concatenating elements of the `wordBank` array. Each element of the 2D array should represent one combination that constructs the `target`

You may reuse elements of `wordBank` as many times as needed
*/

// brute force algorithm
const allConstruct = (target, wordBank) => {
    if (target === '') return [[]]

    const result = []

    for (let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length)
            const suffixWays = allConstruct(suffix, wordBank)
            const targetWays = suffixWays.map(oneWay => [word,...oneWay])
            result.push(...targetWays)
        }
    }

    return result
} // Time: O(n^m), Space: O(m)

// console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
// /*
// [
//     ['purp', 'le'],
//     ['p', 'ur', 'p', 'le']
// ]
// */
// console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
// /*
// [
//     ['ab', 'cd', 'ef'],
//     ['ab', 'c', 'def'],
//     ['abc', 'def'],
//     ['abcd', 'ef']
// ]
// */
// console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
// // console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) 
// console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']))



// memoized algorithm
const allConstructMemo = (target, wordBank, memo= {}) => {
    if (target in memo) return memo[target]
    if (target === '') return [[]]

    const result = []

    for (let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length)
            const suffixWays = allConstructMemo(suffix, wordBank, memo)
            const targetWays = suffixWays.map(oneWay => [word,...oneWay])
            result.push(...targetWays)
        }
    }

    return memo[target] = result
}

console.log(allConstructMemo('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
/*
[
    ['purp', 'le'],
    ['p', 'ur', 'p', 'le']
]
*/
console.log(allConstructMemo('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
/*
[
    ['ab', 'cd', 'ef'],
    ['ab', 'c', 'def'],
    ['abc', 'def'],
    ['abcd', 'ef']
]
*/
console.log(allConstructMemo('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
console.log(allConstructMemo('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) 
console.log(allConstructMemo('eeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']))