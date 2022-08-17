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

    connectDirected(node){
        this.edges.push(node)
    }

    adjacentNodes(){
        return this.edges
    }

    isConnected(node){
        // return this.edges.map(edge => edge.val).indexOf(node.val) > -1
        return !!this.edges.find(edge => edge.val === node.val)
    }
}

class DirectedNode{
    constructor(val){
        this.val = val;
        this.edges = []
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

        if (!visited) {
            visited = new Set()
        }

        console.log("Visiting node: " + start.val);
        visited.add(start)

        if (start.val === target.val) {
            console.log("Node Found!")
            return
        }

        for(let adjacency of start.edges){
            if (!visited.has(adjacency)) {
                this.depthFirstTraversal(adjacency, target, visited)
            }
        }
    }

    topologicalSort(){
        const visited = new Set()
        const topOrdering = []
        for(const node of this.nodes){
            this.depthFirstTraversalSort(node, visited, topOrdering)
        }
        console.log(topOrdering.reverse())
    }

    depthFirstTraversalSort(start, visited, topOrdering){
        if (visited.has(start)) return

        visited.add(start)
        console.log('visiting node: ' , start.val);

        for(const adjacency of start.edges){
            this.depthFirstTraversalSort(adjacency, visited, topOrdering)
        }

        topOrdering.push(start.val)
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
const HKG = new Node('HKG')

const graph = new Graph([DFW, JFK, LAX, HNL, SAN, EWR, BOS, MIA, MCO, PBI, HKG])

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
SAN.connect(HKG)

graph.depthFirstTraversal(DFW, HKG)

// Big O
/*
- Depth First Search has a time complexity of O(v+e) where v is the number of vertices and e is the number of edges
- The space complexity is O(v) because the visited array will at most store each vertex if we traverse the entire graph
*/

// What sorts of problems is DFS good for?
/*
- Detecting a cycle
- Discover whether a graph is bipartite
    - A graph whose vertices can be divinded into two independent sets such that every edge connects a vertex in the first set to one in the second set
- Finding a path between two nodes (not necessarily the shortest path)
- Topological sorting
    A concept where every node in a DAG (directed acyclic graph) appears before all the nodes it points to
*/


// Interview Question
// Given a DAG, return the topological ordering
/*
        A         E
      /   \    /   \
    /       C       \
    B               F
       \          /
         \       / 
            D

Some valid answers would be:
[A, E, B, D, F, C]
[E, A, C, B, D, F]
*/


const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

const directedGraph = new Graph([a, b, c, d, e, f])

a.connectDirected(c)
a.connectDirected(b)
b.connectDirected(d)
d.connectDirected(f)
e.connectDirected(c)
e.connectDirected(f)

console.log('topologicalSort');
directedGraph.topologicalSort()
