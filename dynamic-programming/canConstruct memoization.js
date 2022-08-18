/*
Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings

The function should return a boolean indicating whether or not the `target` can be constructed by concatenating elements of the `wordBank` array

You may reuse elements of `wordBank` as many times as needed

Example 1
canConstruct(abcdef, [ab, abc, cd, def, abcd])
abc + def = abcdef hence it returns true

Example 2
canConstruct(skateboard, [bo, rd, ate, t, ska, sk, boar])
returns false

Example 3
canConstruct('', [cat, dog, mouse])
returns true
*/

// brute force algorithm
const canConstruct = (target, wordBank) => {
    if (target === '') return true

    for (let word of wordBank){
        if (target.substr(0, word.length) === word){
            let newTarget = target.substr(word.length)
            if (canConstruct(newTarget, wordBank)) return true
        }

        // the below code is same as the above code
        // if (target.indexOf(word) === 0){
        //     let newTarget = target.slice(word.length)
        //     if (canConstruct(newTarget, wordBank)) return true
        // }
    }

    return false
} // Time: O(n^m  * m) , Space: O(m^2) where m = target.length and n = wordBank.length

// console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
// console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // false
// console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // true
// console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // false


// memoized algorithm
const canConstructMemo = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === '') return true

    for (let word of wordBank){
        if (target.substr(0, word.length) === word){
            let newTarget = target.substr(word.length)
            if (canConstructMemo(newTarget, wordBank, memo)) {
                return memo[target] = true
            }
        }
    }

    return memo[target] = false
} // Time: O(n * m^2) , Space: O(m^2) where m = target.length and n = wordBank.length

console.log(canConstructMemo('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
console.log(canConstructMemo('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // false
console.log(canConstructMemo('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // true
console.log(canConstructMemo('eeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // false