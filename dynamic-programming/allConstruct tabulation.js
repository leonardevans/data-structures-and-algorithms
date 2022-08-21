/*
Write a function `allConstruct(target, wordBank)` that accepts a target string and an array of strings

The function should return a 2D array containing all the ways that the `target` can be constructed by concatenating elements of the `wordBank` array. Each element of the 2D array should represent one combination that constructs the `target`

You may reuse elements of `wordBank` as many times as needed
*/

const allConstruct = (target, wordBank) => {
    const table = Array(target.length+1).fill().map(()=>[])
    table[0] = [[]]

    for (let i = 0; i <= target.length; i++) {
        for (const word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                //add this word to every sub array at table[i]
                const newCommbination = table[i].map(subArray => [...subArray, word])

                table[i+word.length].push(...newCommbination)
            }
        }
    }

    return table[target.length]
}

// m = target
// n = wordBank.length

// time complexity = O(n^m)
// space complexity = O(n^m)

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
/*
[
    ['purp', 'le'],
    ['p', 'ur', 'p', 'le']
]
*/
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
/*
[
    ['ab', 'cd', 'ef'],
    ['ab', 'c', 'def'],
    ['abc', 'def'],
    ['abcd', 'ef']
]
*/
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) 
// console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']))