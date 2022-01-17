class Node{
    constructor( data, right = null, left = null){
        this.data = data;
        this.right = right;
        this.left = left;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    add(data){
        const node = this.root;
        if (node === null){
            this.root = new Node(data)
            return;
        }else{
            const searchBinary = function(node){
                if (data < node.data){
                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    }else if (node.left !== null){
                        return searchBinary(node.left)
                    }
                }else if (data > node.data){
                    if (node.right === null){
                        node.right  = new Node(data)
                        return;
                    }else if (node.right !== null ){
                        return searchBinary(node.right)
                    }
                }else{
                    return null;
                }
            }
        }
    }

   find(root, value) {
        if (root === null ){
            return null;
        }
        if (root === value ){
            console.log ("Tim thay" + root);
        }
        if (root.left < value){
            return find ( root.left ,value)
        }else {
            return find ( root.right, value)
        }
   }
}

const bst = new BST()
bst.add(7)
bst.add(76)
bst.add(12)
bst.add(21)
bst.add(10)
bst.add(71)
bst.add(56)
bst.find(node, 12)