
// Learning Objectives
/*
-define what a queue is
-describe use cases
-implement a queue
*/

// What is Queue
/*
-collection of items
-add to back of queue (enqueue)
-remove front of queue (dequeue)
-First-In-First-Out (FIFO)
*/

// WHat is a Queue useful for
/*
-"first come, first serve" order
-tracking request for a limited resource
-graph algorithms
*/

class queueNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    enqueue(val){
        const newNode = new queueNode(val);
        if(this.size === 0){
            this.front = newNode;
            this.back = newNode;
        } else{
            this.back.next = newNode;
            this.back = newNode;
        }
        this.size++;
    }

    dequeue(){
        if(this.size === 0) return null;

        const removedNode = this.front;
        this.front = this.front.next;

        if(this.size === 1) this.back = this.front;

        this.size--;
        return removedNode.val;
    }
}

const myQueue = new Queue();
myQueue.enqueue("a");
myQueue.enqueue("b");
myQueue.enqueue("c");
console.log("size : ",myQueue.size);
console.log("front ", myQueue.front.val);
console.log("back: ", myQueue.back.val);


// Recap
// reviewed the fundamental structure of queues (FIFO)