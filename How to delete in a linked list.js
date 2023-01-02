
// Learning Objectives
/*
implement node deletion for a linked list
*/

/*
Write a function, deleteValue(head, val), that accepts the head node of a linked list and a value as an argument

The function should delete the node of the linked list that contains the given value

The function should return the head of the list

Assume thet the linked list only contains unique values
*/

class Node{
    constructor(val){
        this.next= null;
        this.val = val;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

//Iterative approach
const deleteValue = (head, target) => {
    if (head.val === target) return head.next;

    let curr = head;
    let prev = null;

    while(curr !== null){
        if (curr.val === target) {
            prev.next = curr.next;
        }
        prev = curr;
        curr = curr.next;
    }

    return head;
} // Time: O(n), Space: O(1)

// Recursive approach
const deleteValueRecursive = (head, target) => {
    if (head.val === target) return head.next;

    _deleteValueRecursive(head, null, target);

    return head;
} // Time: O(n), Space: O(n)

const _deleteValueRecursive = (curr, prev, target) => {
    if(curr === null) return;

    if (curr.val === target){
        prev.next = curr.next;
        return;
    }
    _deleteValueRecursive(curr.next, curr, target);
}

const print = (head) => {
    if (head === null) return;
    console.log(head.val + '->');
    print(head.next);
}

print(a);
// const newHead = deleteValueR(a, 'c');
const newHead = deleteValueRecursive(a, 'c');
print(newHead);

// Recap
/*
Explored how to implement iterative and recursive deletion for linkd lists
*/