// Learning Objectives
/*
- Understand the depth first traversal method
- See a code implementation
- Walkthrough example interview problem that requires DFS
*/

// Depth first traversal
/*
- Traverses deeply into the data structure by exploring all nodes on a branch going forwarduntil you reach the node you are searching for or a dead end
- Backtrack up the branch until you reach a new branch to explore
- This uses a stack data structure (LIFO )
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

    depthFirstTraversal(start, target, visited){
        /*
        keep going deeper into the graph until you hit a leaf node or you are at the end node
        */

        if (start.val === target.val) {
            console.log("Node Found!")
            return
        }

        console.log("Visiting node: " + start.val);
        visited.add(start)

        for(let adjacency of start.edges){
            if (!visited.has(adjacency)) {
                this.depthFirstTraversal(adjacency, target, visited)
            }
        }
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

graph.depthFirstTraversal(DFW, HNL, new Set)