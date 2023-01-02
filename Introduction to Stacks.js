
// Learning Objectives
/*
define what a  stack is
describe some use cases
implement a stack
*/

// What is a stack
/*
a collection of multiple items
add to top of stack (push)
remove top of stack(pop)
Last-In-First-Out(LIFO)
*/

// What is a stack used for
/*
tracking a history of steps
browser history
backtracking algorithms
*/

// Implementing a stack
// Using an array

class StackNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.size = 0;
    }

    push(val){
        if (this.size === 0){
            this.top = new StackNode(val);
        }else{
            const pushedNode = new StackNode(val);
            pushedNode.next = this.top;
            this.top = pushedNode;
        }
        this.size++;
    }

    peek(){
        return this.top.val;
    }

    pop(){
        if (this.size === 0) return null;

        const poppedNode = this.top;
        this.top = this.top.next;
        this.size--;
        return poppedNode.val;
    }
}

const myStack = new Stack();
myStack.push("a");
myStack.push("b");
myStack.push("c");
console.log("size: ", myStack.size);
console.log("top: ", myStack.peek());
console.log("popped: ", myStack.pop());
console.log("popped: ", myStack.pop());
console.log("size: ", myStack.size);

// Recap
/*
reviewed the fundamental structure of stacks (LIFO)
*/