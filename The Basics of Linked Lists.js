
// Learning Objectives
/*
Implement a linked list that can:
    add a new value
    print the list
    search for an existing value
*/

// what's special about linked lists compared to other data structures
/*
a data structure where values are chained sequencially
More efficient for insertion/deletion than arrays 
Does not require continuous memory addressing

            Array       Linked List
access      O(1)        O(n)
insertion   O(n)        O(1)
delete      O(n)        O(1)
*/

// Linked list structure
/*
composed of nodes that contain a stored value and a reference to the next node
*/

// Linked list variants
/*
singly linked list
doubly linked list
circular/dummy head linked list
circular doubly linked list
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
        if (this.head === null) {
            this.head = new Node(val);
            return;
        }

        let curr = this.head;
        while (curr.next !== null){
            curr = curr.next;
        }

        curr.next = new Node(val);
    }

    print(){
        let str = '';
        let curr = this.head;
        while (curr !== null) {
            str += curr.val + '->';
            curr = curr.next;
        }
        console.log(str);
    }

    contains(el) {
        let curr = this.head;

        while (curr !== null) {
            if (curr.val === el) return true;
            curr = curr.next;
        }

        return false;
    }
}

const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
list.print();

console.log('contains a', list.contains('a'));
console.log('contains e', list.contains('e'));
