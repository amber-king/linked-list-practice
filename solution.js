const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// ? Node Functionality Test --v
// nodes created to link them
// let oneNode = new Node(1);
// let twoNode = new Node(2);
// oneNode.next = twoNode;
// console.log(oneNode); // Node { data: 1, next: Node { data: 2, next: null } }

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  insert(data){
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  
}
// ? LinkedList funtionailty test --v
// let listOne = new LinkedList(oneNode)
// console.log(listOne)  // --v
// LinkedList {
//   head: Node { data: 1, next: Node { data: 2, next: null } }
// }




module.exports = {
  Node,
  LinkedList,
};
