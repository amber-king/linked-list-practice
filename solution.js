const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let oneNode = new Node(1);
let twoNode = new Node(2);
oneNode.next = twoNode;
console.log(oneNode);

class LinkedList {
  constructor() {
    this.head = null;
  }
}

module.exports = {
  Node,
  LinkedList,
};
