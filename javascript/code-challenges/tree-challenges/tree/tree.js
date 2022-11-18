'use strict';

class Node {
constructor(value, left = null, right = null){

    this.value = value;
    this.left = left;
    this.right = right;
    }
    
}

class BinaryTree{
    constructor(root = null){
this.root = root;
    }

    //Root Left Right
    preOrder(){
        let result = [];
        const traversal = (node) =>{
            result.push(node.value);
            if(node.left)
            traversal(node.left);
            if(node.right)
            traversal(node.right);
        
        }
        traversal(this.root);
        return result;
    }

    //Left Root Right
    inOrder(){
    let result = [];
    const traversal = (node) =>{
        if(node.left)
        traversal(node.left);
        result.push(node.value);
        if(node.right)
        traversal(node.right);
    
    }
    traversal(this.root);
    return result;
    }

    //Left Right Root 
    postOrder(){
    let result = [];
    const traversal = (node) =>{
        if(node.left)
        traversal(node.left);
        if(node.right)
        traversal(node.right);
        result.push(node.value);
    }
    traversal(this.root);
    return result;
    }
}
module.exports={
    Node,
    BinaryTree
}
 