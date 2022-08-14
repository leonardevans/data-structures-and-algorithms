// Learning Objectives
/*
- Understand the breadth first traversal method
- See a code implementation
- Walkthrough example interview problem that requires BFS
*/

// Breadth First Traversal
/*
- Traverse broad into the data structure by visiting neighbour nodes before children nodes
- Uses a queue data structure
*/


class Node{
    constructor(val){
        this.val = val;
        this.edges = []
    }

    connect(node){
        this.edges.push(node)
        node.edges.push(this)
    }

    adjacentNodes(){
        return this.edges
    }

    isConnected(node){
        // return this.edges.map(edge => edge.val).indexOf(node.val) > -1
        return !!this.edges.find(edge => edge.val === node.val)
    }
}

class Graph{
    constructor(nodes){
        this.nodes = [...nodes]
    }

    addNode(node){
        this.nodes.push(node)
    }

    breadthFirstTraversalPrint(start){
        const queue = [start]
        const visitedNodes = new Set()
        visitedNodes.add(start)

        while (queue.length > 0) {
            // pull node queue ( to visit)
            // add its adjacencies to the queue
            const node = queue.shift()
            console.log(node.val);

            for(const adjacency of node.edges){
                if (!visitedNodes.has(adjacency)) {
                    queue.push(adjacency)
                    visitedNodes.add(adjacency)
                }
            }

        }
    }

    breadthFirstTraversalSearch(start, target){
        const queue = [start]
        const visitedNodes = new Set()
        visitedNodes.add(start)

        while (queue.length > 0) {
            // pull node queue ( to visit)
            // add its adjacencies to the queue
            const node = queue.shift()
            console.log(node.val);

            if (node.val === target.val) {
                console.log('Found It!');
                return;
            }

            for(const adjacency of node.edges){
                if (!visitedNodes.has(adjacency)) {
                    queue.push(adjacency)
                    visitedNodes.add(adjacency)
                }
            }

        }
    }

    reconstructPath(visitedNodes, startNode, endNode){
        let currNode = endNode

        const shortestPath = []
        while (currNode !== null){
            shortestPath.push(currNode)
            currNode = visitedNodes[currNode.val]
        }

        return shortestPath.reverse()
    }

    breadthFirstTraversalDistance(start, end){
        const queue = [start]
        const visitedNodes = {}
        visitedNodes[start.val] = null
        

        while (queue.length > 0) {
            const node = queue.shift()

            if (node.val === end.val) {
                console.log("Found It");
                return this.reconstructPath(visitedNodes, start, end)
            }

            //add its neighbours to the queue
            //track when nodes that we are adding are coming from

            for (const adjacency of node.edges){
                if (!visitedNodes.hasOwnProperty(adjacency.val)) {
                    visitedNodes[adjacency.val] = node
                    queue.push(adjacency)
                    console.log(adjacency.val);
                }
            }

        }

        console.log(visitedNodes);
    }
}

const DFW = new Node('DFW')
const JFK = new Node('JFK')
const LAX = new Node('LAX')
const HNL = new Node('HNL')
const SAN = new Node('SAN')
const EWR = new Node('EWR')
const BOS = new Node('BOS')
const MIA = new Node('MIA')
const MCO = new Node('MCO')
const PBI = new Node('PBI')

const graph = new Graph([DFW, JFK, LAX, HNL, SAN, EWR, BOS, MIA, MCO, PBI])

DFW.connect(LAX)
DFW.connect(JFK)
LAX.connect(HNL)
LAX.connect(EWR)
LAX.connect(SAN)
JFK.connect(BOS)
JFK.connect(MIA)
MIA.connect(MCO)
MCO.connect(PBI)
MIA.connect(PBI)

console.log('breadthFirstTraversalPrint');
graph.breadthFirstTraversalPrint(DFW)

console.log('breadthFirstTraversalSearch');
graph.breadthFirstTraversalSearch(DFW, MCO)


// Breadth First Search has a time complexity of O(v+e) where v is the number of vertices and e is the number of edges
//The Space complexity is O(v) where v is the number of vertices


// Sample Interview Problem
/*
Given a graph of users and their connections, find the smallest distance between two users
Given the inputs Hannah and Mabel, the answer should be 2 and the path ['Hannah', 'Liz', 'Mabel'] should be returned
*/

const Hannah = new Node('Hannah')
const Mary = new Node('Mary')
const Mel = new Node('Mel')
const Max = new Node('Hannah')
const Dan = new Node('Dan')
const Nis = new Node('Nis')
const Chris = new Node('Chris')
const Nicolette = new Node('Nicolette')
const Yair = new Node('Yair')
const Mabel = new Node('Mabel')
const Liz = new Node('Liz')


const distanceGraph = new Graph([Hannah, Mary, Mel, Max, Dan, Nis, Chris, Nicolette, Yair, Mabel, Liz])

Hannah.connect(Mary)
Hannah.connect(Mel)
Hannah.connect(Max)
Hannah.connect(Mel)
Hannah.connect(Liz)
Hannah.connect(Nis)
Nis.connect(Dan)
Nis.connect(Chris)
Nis.connect(Yair)
Chris.connect(Nicolette)
Chris.connect(Yair)
Yair.connect(Liz)
Yair.connect(Mabel)
Mabel.connect(Liz)


console.log('breadthFirstTraversalDistance');
console.log(graph.breadthFirstTraversalDistance(Hannah, Mabel))

// 