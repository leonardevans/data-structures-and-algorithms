// Leaning Objective
/*
define the term binary tree
implement a breadth-first traversal
*/

// What's a tree
/*
a colection of nodes and edges where:
    there is one root
    there is only one unique path between any two nodes

*/

// What's a binary tree
/*
Tree where each node has at most two children
*/

// implementing a binary tree

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.right = f;

const breadthFirstPrint = (root) =>{
    const queue = [root];
    while(queue.length > 0){
        const curr = queue.shift();
        console.log(curr.val);

        if(curr.left !== null){
            queue.push(curr.left);
        }

        if(curr.right !== null){
            queue.push(curr.right);
        }
    }
}; // Time: O(n), Space: O(n)

breadthFirstPrint(a);


// Breadth First Search Sample Problem 1
/*
Write a function, bfs(root, target), that takes in the root of a binary tree and a target value as arguments
The function should return a boolean indicating whether or not the tree contains the target value
*/


const breadthFirstSearch = (root, target) =>{
    const queue = [root];
    while(queue.length > 0){
        const curr = queue.shift();
        
        if (curr.val === target) return true;

        if(curr.left !== null){
            queue.push(curr.left);
        }

        if(curr.right !== null){
            queue.push(curr.right);
        }
    }

    return false;
}; // Time: O(n), Space: O(n)

console.log(breadthFirstSearch(a, 'e')); // true
console.log(breadthFirstSearch(a, 'z')); // false


// Breadth First Search Sample Problem 2
/*
Write a function, sumTree(root ), that takes in the root of a binary tree as an argument
The function should return the total sum of all values in the tree. You can assume that the tree only contains number values
*/

const g = new Node(3);
const h = new Node(2);
const i = new Node(7);
const j = new Node(4);
const k = new Node(-2);
const l = new Node(5);

g.left = h;
g.right = i;
h.left = j;
h.right = k;
i.right = l;

//          3
//         /  \
//        2     7
//       / \      \
//      4   -2      5    

const sumTree = (root) =>{
    const queue = [root];
    let sum = 0;

    while(queue.length > 0){
        const curr = queue.shift();
        
        sum += curr.val;

        if(curr.left !== null){
            queue.push(curr.left);
        }

        if(curr.right !== null){
            queue.push(curr.right);
        }
    }

    return sum;
} // Time: O(n), Space: O(n)

console.log(sumTree(g)); // 19

// Recap
/*
define binary trees
explored the bfs
*/