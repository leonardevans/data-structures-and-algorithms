
// Learning Objectives
/*
Implement recursive methods to:
    add a new value to a linked list
    print the list
    search for an existing value
*/ 

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    append(val){
        if(this.head === null){
            this.head = new Node(val);
            return;
        }

        this._append(val, this.head);
    }

    _append(val, curr){
        if (curr.next === null) {
            curr.next = new Node(val);
            return;
        }

        this._append(val, curr.next);
    }

    print(){
        const output =this._print(this.head);
        console.log(output);
    }

    _print(curr){
        if(curr === null) return '';
        return curr.val + '->' + this._print(curr.next);
    }

    contains(target){
        return this._contains(this.head, target);
    }

    _contains(curr, target){
        if (curr === null) return false;
        if (curr.val === target) return true;
        return this._contains(curr.next, target);
    }
}

const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');

console.log(list.head);
list.print();

console.log(list.contains('a'));
console.log(list.contains('b'));
console.log(list.contains('c'));
console.log(list.contains('d'));
console.log(list.contains('f'));

const list2 = new LinkedList();
list2.append(12);
list2.append(27);
list2.append(5);
list2.append(22);

// iterative approach
const sumListIterative = (head) => {
    let sum = 0;
    let curr = head;

    while(curr !== null){
        sum += curr.val;
        curr = curr.next;
    }

    return sum;
} // Time: o(N), Space: O(1)

// recursive approach
const sumListRecursive = (head) => {
    if (head === null) return 0;
    return head.val + sumListRecursive(head.next);
} // Time: o(N), Space: O(n)

console.log(sumListIterative(list2.head)); //66
console.log(sumListRecursive(list2.head)); //66