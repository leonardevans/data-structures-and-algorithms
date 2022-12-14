
// Learning objectives
/*
implement combinations

*/

// What is combinatorics
/*
Field of math concerned with counting things
*/

// Common Questions
/*
Given N things, in how many ways we can arrange them
In how many ways we can we do X
What is the shortest way to do Y
*/

// What is a combination
/*
A collections of items where the order does not matter

Combinations of [a, b, c]
[
    [],
    [a],
    [b],
    [c],
    [a, b],
    [b, c],
    [a, b, c],
]

Given a set of n things, there are 2^n possible combinations
*/

const combinations = (elements) => {
    if (elements.length === 0) return [ [] ]; // base case scenario

    const firstEl = elements[0];
    const restEl = elements.slice(1);

    const combWithoutFirst = combinations(restEl);
    combWithFirst = [];

    combWithoutFirst.forEach(comb => {
        combWithFirst.push([...comb, firstEl]);
    });

    return [...combWithoutFirst, ...combWithFirst];
};

// Time: O(2^n)
// Space: O(n^2)

console.log(combinations(['a', 'b', 'c']));




const fastCombinations = (elements) => {
return _combs(elements, elements[0], elements.slice(1));
};

const _combs = (array, firstEl, rest) => {
    // Return 2D Array if array has no values
    if (array.length === 0) return [[]];
    const combsWithoutFirst = fastCombinations(rest);
    const combsWithFirst = [];
    // Iterate combinations without first element
    for (let comb of combsWithoutFirst) {
        // Add the first Element after the rest of combs
        const combWithFirst = [...comb, firstEl];
        combsWithFirst.push(combWithFirst);
    }
    return [...combsWithoutFirst, ...combsWithFirst];
};