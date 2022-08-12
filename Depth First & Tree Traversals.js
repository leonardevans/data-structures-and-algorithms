// Learning Objectives
/*
implement a depth first traversal
differentiate pre-order, in-order, post-order
*/

// Depth first traversal
/*
            a
           / \
          b   c
        /   \    \
       d     e     f

a, b, d, e, c, f
*/

// we use a stack to implement depth first traversal

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
c.right = f;

const depthFirstPrint = (root) => {
    const stack = [root];

    while(stack.length > 0){
        // remove the top element
        const curr = stack.pop();

        console.log(curr.val);

        //add curr's children to the top of the stack
        // since its depth first traversal, we add our curr's right first, then its left
        if(curr.right !== null){
            stack.push(curr.right);
        }

        if(curr.left !== null){
            stack.push(curr.left);
        }
    }
}; // Time: O(n), Space: O(n)

depthFirstPrint(a);

// recursive implementation of depth first traversal
console.log('----recursive-------');
const recursiveDepthFirstPrint = (root) =>{
    //if the tree is empty
    if(root === null) return;

    console.log(root.val);

    recursiveDepthFirstPrint(root.left);
    recursiveDepthFirstPrint(root.right);
}; // Time: O(n), Space: O(n)

recursiveDepthFirstPrint(a);

// flavors of depth first traversal
/*
pre-order traversal
post-order traversal
in-order traversal
*/

// pre-order
// self, left, right
console.log('pre-order');
const preOrder = (root) =>{
    //if the tree is empty
    if(root === null) return;

    // print self first
    console.log(root.val);

    // print left after self
    preOrder(root.left);

    // print right after left
    preOrder(root.right);
}; // Time: O(n), Space: O(n)

preOrder(a); // abdecf


// post-order
// left, right, self
console.log('post-order');
const postOrder = (root) =>{
    //if the tree is empty
    if(root === null) return;

    // print left first
    postOrder(root.left);
    // print right after left
    postOrder(root.right);

    // print self last
    console.log(root.val);
}; // Time: O(n), Space: O(n)

postOrder(a); // abdecf


// in-order
// left, self, right
console.log('in-order');
const inOrder = (root) =>{
    //if the tree is empty
    if(root === null) return;

    // print left first
    inOrder(root.left);

    // print self after left
    console.log(root.val);

    // print right last
    inOrder(root.right);
}; // Time: O(n), Space: O(n)

inOrder(a); // abdecf

// Depth First Search Sample Problem
/*
Write a function, sumTree(root), that takes in the root of a binary tree as an argument

The function should return the total sum of all values in the tree. Assume that the tree only contains number values
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

console.log("sumTree");
const sumTree = (root) => {
    const stack = [root];
    let sum = 0;

    while(stack.length > 0){
        // remove the top element
        const curr = stack.pop();

        sum += curr.val;

        //add curr's children to the top of the stack
        // since its depth first traversal, we add our curr's right first, then its left
        if(curr.right !== null){
            stack.push(curr.right);
        }

        if(curr.left !== null){
            stack.push(curr.left);
        }
    }

    return sum;
}; // Time: O(n), Space: O(n)

//          3
//         /  \
//        2     7
//       / \      \
//      4   -2      5 

console.log(sumTree(g)); // 19


// solving the above problem recursively
console.log('sum recursive');
const recursiveSumTree = (root) =>{
    //if the tree is empty
    if(root === null) return 0;

    return recursiveSumTree(root.left) + root.val + recursiveSumTree(root.right);
}; // Time: O(n), Space: O(n)

console.log(recursiveSumTree(g));

// Recap
// explored the depth first traversal algorithm
// identified the difference between pre-order, in-order, and post-order variations