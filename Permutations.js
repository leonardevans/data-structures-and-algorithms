
// Learning Objectives
/*
implement permutations
*/

// What is a permutation
/*
a collection of things where the order matters

Permutations of [a, b, c]
[c, b, a]
[b, c, a]
[b, a, c]
[c, a, b]
[a, c, b]
[a, b, c]

given a set of n things, there are n! permutations
*/

const permutations = (elements) => {
    if (elements.length === 0) return   [ [] ];
    const firstEl = elements[0];

    const restEl = elements.slice(1);
    const permsWithoutFirst = permutations(restEl);

    const allPermutaions = [];

    permsWithoutFirst.forEach(perm => {
        for (let i = 0; i <= perm.length; i++) {
            const permWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)];
            allPermutaions.push(permWithFirst);
        }
    });

    return allPermutaions;
}

console.log(permutations(['a', 'b', 'c']));

// Time: O(n!)
// Space: O(n^2)