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

  // ✓ Can create a new node
  // ✓ Can create a new linked list
  // ✓ Add to the linked list using an insert method
  insert(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  //   ✓ Count the length of the linked list (1 ms)
  size() {
    let count = 0;
    let pointer = this.head;
    while (pointer) {
      count++;
      pointer = pointer.next;
    }
    return count;
  }

  // ✓ Delete from the linked list by key
  delete(key) {
    let node = this.head;
    let counter = 0;
    while (node.data !== key && node.next) {
      counter++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < counter; i++) {
      node = node.next;
    }
    node.next = foundNode.next;
  }

  // ✓ Retrieve the first element
  getFirst() {
    return this.head;
  }

  // ✓ Retrieve the last element
  getLast() {
    let node = this.head;
    if (!this.head) return null;
    while (node.next) {
      node = node.next;
    }
    return node;
  }
  search(key) {
    let node = this.head;
    while (node !== null && node.data !== key) {
      node.next;
    }
    return node;
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
