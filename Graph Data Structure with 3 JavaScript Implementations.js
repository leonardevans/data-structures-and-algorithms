// Learning Objectives
/*
Define the term graph
Learn key terms such as vertices and edges
Representations of the graph data structure in code
Directed vs Undirected graphs
Weighted vs unweighted graphs
Cyclic vs Acyclic graphs
*/

// WHat is a graph
/*
A data structure made up of nodes or vertices and edges or the connections between nodes
Typically, a visualization of a graph will be of nodes represented by circles and edges as lines between the circles
*/

// Trees: A special kind of graph
/*
Trees are just a special kind of graph with one root and only one unique path between any two nodes
A graph can go beyond that and have any number of root elements and multiple paths between nodes
*/

// How can we represent a graph in code
/*
Vertex list(Node) + Edge list (Connections between the Nodes)

A------B
|     /
|   C
| /   \
D-------E

const vertices = ['A', 'B', 'C', 'D', 'E']
const edges = [
    ['A', 'B'],
    ['A', 'D'],
    ['B', 'C'],
    ['C', 'D'],
    ['C', 'E'],
    ['D', 'E']
]

Time complexity to find adjacent nodes - O(e) where e is the number of edges
Time complexity to check if two nodes are connected - O(e) where e is the number of edges
Space complexity - O(v+e) where v is the number of vertices and e is the number of edges
*/

const vertices = ['A', 'B', 'C', 'D', 'E']
const edges = [
    ['A', 'B'],
    ['A', 'D'],
    ['B', 'C'],
    ['C', 'D'],
    ['C', 'E'],
    ['D', 'E']
]

// findAdjacentNodes
console.log('findAdjacentNodes');
const findAdjacentNodes = (node) => {
    const adjacentNodes = []

    for (let edge of edges) {
        const nodeIndex = edge.indexOf(node)

        if (nodeIndex > -1) {
            adjacentNode = nodeIndex === 0 ? edge[1] : edge[0]
            adjacentNodes.push(adjacentNode)
        }
        
    }

    return adjacentNodes
}

console.log(findAdjacentNodes('C'));


// isConnected
console.log('isConnected');
const isConnected = (node1, node2) => {
    return edges.some( (edge) => {
        return edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1
    })
}

console.log(isConnected('A', 'E'));


// Adjacency Matrix
/*
A 2-D array filled out with 1's and 0's where each array represents a node and each index in the subarray represents a potential connection to another node
The value at adjacencyMatrix[node1][node2] indicates whether there is a connection between node1 and node2

A------B
|     /
|   C
| /   \
D-------E

const vertices = ['A', 'B', 'C', 'D', 'E']

const adjacentMatrix = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [0, 0, 1, 1, 0]
]

Time complexity to find adjacent nodes - O(v) where v is the number of vertices
Time complexity to check if two nodes are connected - O(1)
Space complexity - O(v^2) where v is the number of vertices
*/

const vertices1 = ['A', 'B', 'C', 'D', 'E']

const adjacentMatrix = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [0, 0, 1, 1, 0]
]

const vertexIndex = {
    'A' : 0,
    'B' : 1,
    'C' : 2,
    'D' : 3,
    'E' : 4
}

// findAdjacencies
console.log('findAdjacencies');
const findAdjacencies = (node) =>{
    const adjacentNodes = []

    for (let i = 0; i < vertices1.length; i++) {
        nodeVertex = vertexIndex[node]
        
        if (adjacentMatrix[nodeVertex][i] === 1) {
            adjacentNodes.push(vertices1[i])
        }
    }

    return adjacentNodes;
}

console.log(findAdjacencies('E'));


// isConnected
console.log('isConnectedUsingAdjacentMatrix');
const isConnectedUsingAdjacentMatrix = (node1, node2) => {
    const node1Index = vertexIndex[node1]
    const node2Index = vertexIndex[node2]

    return !! adjacentMatrix[node1Index][node2Index]
}

console.log(isConnectedUsingAdjacentMatrix('A', 'E'));


// Adjacency List
/*
a------b
|     /
|   c
| /   \
d-------e

const vertices = ['a', 'b', 'c', 'd', 'e']

const adjacencyList = [
    ['b', 'd'],
    ['a', 'c'],
    ['b', 'd', 'e'],
    ['a', 'c', 'e'],
    ['c', 'd']
]

For every node, store a list of what nodes it's connected to
Time complexity to find adjacent nodes - O(1)
Time complexity to check if two nodes are connected - O(log v) if each adjacent row is sorted
Space complexity - O(e) where e is the number of edges
*/
console.log('Adjacency List');
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
        return this.edges.map(edge => edge.val)
    }

    isConnected(node){
        // return this.edges.map(edge => edge.val).indexOf(node.val) > -1
        return this.edges.includes(node)
    }
}

class Graph{
    constructor(nodes){
        this.nodes = [...nodes]
    }

    addNode(node){
        this.nodes.push(node)
    }
}

const nodeA = new Node('A')
const nodeB = new Node('B')
const nodeC = new Node('C')
const nodeD = new Node('D')
const nodeE = new Node('E')

const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE])

nodeA.connect(nodeB)
nodeA.connect(nodeD)
nodeB.connect(nodeC)
nodeC.connect(nodeD)
nodeC.connect(nodeE)
nodeD.connect(nodeE)

for (let node of graph.nodes){
    console.log(`Node ${node.val}`)

    for (let connectedNode of node.edges){
        console.log(`Node ${node.val} is connected to ${connectedNode.val}`);
    }
}

console.log(nodeA.adjacentNodes());
console.log(nodeA.isConnected(nodeB));


// Graph Terminology

// Directed vs Undirected Graphs
/*
- In an Undirected Graph, when there is a connection between nodes, it goes both ways
- Facebook and its users and the relationship between the users can be modeled as an undirected graph
- Users are nodes and friendships between users are edges
- There may be many ways two users are connected on Facebook
- The graph is undirected because if you are friends with someone on Facebook, they are by defination friends with you in return
*/

// Directed Graphs
/*
- In a Directed Graph, connections between nodes have direction
- The internet can be modeled as a directed graph where individual web pages are nodes and links between the pages are directed edges
- Links are directed - just because one page links to another, doesn't mean that page links back in return
- The degree of a node is the number of edges connected to the node
- In a directed graph, nodes have an indegree or edges pointing to it and an outdegree or edges pointing from it(edges it is pointing to)
*/

// Weighted vs Unweighted Graphs
/*
- A Weighted Graph is a graph in which the edges have values corresponding to weights
- An intercity road network could be an example of a weighted graph, where each city is a node and each road is an edge, labeled with their lengths
- An Unweighted Graph has no weights to its edges, so every edge is the same as any other edges
*/

// Cyclic vs Acyclic Graphs
/*
- In a Cyclic Graph, there is atleast one cycle, meaning that there is a path from at least one node back to itself
- An Acyclic Graph, means the graph contains no cycles i.e no node can be traversed back to itself
- Both of these graphs can be directed or undirected. Directed Acyclic Graphs (DAGs) have special applications in computer science and can often be used to represent any complex data processing flows
*/


// Dense vs Sparce Graphs
/*
- Dense Graph - close to the maximum number of edges
- Sparce Graph - the number of edges is close to the number of nodes in the graph

- Self-loop - when an edge has just one vertex (like a web page linking to itself)
- Multi-edge graph - there are multiple edges between two nodes
- Simple Graph - A graph with no self-loops and no multi-edges

In a simple directed graph, the maximum number of edges will be equal to n*(n-1) where n is the number of nodes
In a simple undirected graph, the maximum number of edges is n*(n-1)/2 (because there are no directions, there can only be one edge between two nodes)
*/


// Common Graph Interview Questions
/*
- Find the shortest path between two nodes
- Check if an undirected graph contains a cycle
- Given an undirected graph with maximum degree D, find a graph coloring using at most D + 1 colors
*/
