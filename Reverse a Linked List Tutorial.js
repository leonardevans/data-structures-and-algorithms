
// The problem
/*
Write a function, reverseList, that accepts the head of a linked list as an argument
The function should reverse the order of the nodes of the linked list in-place
The function should return the new head of the linked list
*/

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

const print = (head) => {
    if(head === null) return;

    console.log(head.val);
    print(head.next);
};

console.log("initial--------------");
print( a);
// a->b->c->d

// iterative solution
const reverseListIteratively = (head) => {
    let prev = null;
    let curr = head;

    while(curr !== null){
        const next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
    }

    return prev;
}// Time: O(n), Space: O(1)

// const newHead = reverseListIteratively(a);
// console.log("iterative--------------");
// print( newHead);
// d->c->b->a

// recursive solution
const reverseListRecursively = (curr, prev = null) => {
    if (curr === null) {
        return prev;
    }

    const next = curr.next;
    curr.next = prev;
    return reverseListRecursively(next, curr)
};// Time: O(n), Space: O(n)


const newHead2 = reverseListRecursively(a);
console.log("recursive--------------");
print( newHead2);
// d->c->b->a

// recap
// Explored how to implement iterative and recursive reversal for linked lists
