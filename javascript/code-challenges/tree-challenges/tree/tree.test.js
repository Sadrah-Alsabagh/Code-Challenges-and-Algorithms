'use strict';

const {BinaryTree} = require('./tree.js');

let tree = null;

describe('Testing the tree', ()=>{
   beforeAll(()=>{
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six ;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;
   
    tree = new BinaryTree(1);
})

    it('Testing preOrder',()=>{
// console.log(tree);
const expectedResult =[1,2,6,7,8,9,3.4,5]; 
const ordered = tree.preOrder; 

expect(ordered).toEqual(expectedResult);
    })

    it('Testing inOrder',()=>{
    // console.log(tree);
    const expectedResult =[6,8,7,9,2,1,4,3,5]; 
    const ordered = tree.inOrder; 
    
    expect(ordered).toEqual(expectedResult);
        })

    it('Testing postOrder',()=>{
        // console.log(tree);
        const expectedResult =[8, 9, 7, 6, 2, 4, 5, 3, 1]; 
        const ordered = tree.postOrder; 
        
        expect(ordered).toEqual(expectedResult);
            })

})
