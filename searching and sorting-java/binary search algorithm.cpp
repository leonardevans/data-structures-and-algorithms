// What is a Binary search Tree(BST)
/*
A BST is a set of nodes organized in such a manner that they all have the same BST characteristics

A key and a value are assigned to each node

The requested key is compared to the keys in BST during the search, and if found, the corresponding value is obtained
*/

// Properties of a BST
/*
The left subtree of a node containes only nodes with keys lesser than the node's key

The right subtree of a node contains only nodes with keys greater than the node's key

The left and right subtree each must also be a binary search tree
*/

// Operations performed on a binary search tree
/*
Insertion
Deletion
*/

#include<bits/stdc++.h>
using namespace std;

class bst{
    int data;
    bst *left, *right;
    public:
        bst();
        bst(int);
        bst* insert(bst*, int );
        void traverse(bst*);
};

bst::bst()
:data(0), left(NULL), right()
{
}

bst::bst(int value)
{
    data=value;
    left=NULL;
    right=NULL;
}

bst* bst::insert(bst* root, int value)
{
    if(!root){
        return new bst(value);
    }
    if (value > root->data)
    {
        root->right = insert(root->right, value);
    }else{
        root->left = insert(root->left, value);
    }
    return root;
}

void bst::traverse(bst* root)
{
    if(!root)
    {
        return;
    }
    traverse(root->left);
    cout<<root->data<<" "<<endl;
    traverse(root->right);
}

int main()
{
    bst b, *root=NULL;
    root=b.insert(root, 50);
    b.insert(root, 10);
    b.insert(root, 30);
    b.insert(root, 60);
    b.insert(root, 20);


    b.traverse(root);
    return 0;
}
