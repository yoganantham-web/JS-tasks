class BinaryTree {
  constructor() { 
    this.root = null;
  }
  addNumNode(data, left = null, right = null) { 
    let Node = {
      data,
      left,
      right
    }; 
    let presentNumberNode; 
    if (!this.root) { 
      this.root = Node;
    } else { 
      presentNumberNode = this.root;
      while (presentNumberNode) { 
        if (data < presentNumberNode.data) { 
          if (!presentNumberNode.left) {
            presentNumberNode.left = Node; 
            break;
          } else { 
            presentNumberNode = presentNumberNode.left;
          } 
        } else if (data > presentNumberNode.data) { 
          if (!presentNumberNode.right) {
            presentNumberNode.right = Node; 
            break;
          } else { 
            presentNumberNode = presentNumberNode.right;
           
          }
        } 
        else {
          console.log("Try Different Value");
          break;
        } 
      }
    }
  }
  clearRoot(){
    this.root = null;
  }
  findHeight(node = this.root) {
      if (node == null) {
          return -1;
      }
      let left = this.findHeight(node.left);
      let right = this.findHeight(node.right);
      if (left > right){
          return left + 1;
      } else {
          return right + 1;
      }
  } 
}
let BT = new BinaryTree(); 
BT.addNumNode(12);
BT.addNumNode(5);
BT.addNumNode(8);
BT.addNumNode(22);
BT.addNumNode(18);
BT.addNumNode(19); 
console.log(BT.findHeight());
module.exports = {
    findHeight: BT.findHeight,
    addNumNode: BT.addNumNode,
    clearRoot: BT.clearRoot
};