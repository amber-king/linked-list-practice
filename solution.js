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
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
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

  // ✓ Find an element by key
  search(findKey) {
    let node = this.head;
    while (node !== null && node.data !== findKey) {
      node = node.next;
    }
    return node;
  }

  // Source : https://www.interviewbit.com/problems/kth-smallest-element-in-the-array/#:~:text=Definition%20of%20kth%20smallest%20element,sorted%2C%20then%20Ak%20%2D%201
  // What is the KTH element?
  // Definition of kth smallest element:
  // The kth smallest element is the minimum possible n such that there are at least k elements in the array <= n.
  // In other words, if the array A was sorted, then Ak - 1.

  // ✓ Retrieve kth element
  getKth(kthElement) {
    let node = this.head;
    let count = 1;
    while (count !== kthElement && node.next) {
      count++;
      node.next;
    }
    return node;
  }

  //  ✓ Retrieve kth from last element
  getKthToLast(kthLastElement) {
    let node = this.head;
    let amtOfNodes = 0;
    while (node) {
      amtOfNodes++;
      node = node.next;
    }
    let count = 1;
    node = this.head;
    while (count < amtOfNodes - kthLastElement) {
      count++;
      node = node.next;
    }
    return node;
  }

  //  ✓ Check if list is empty
  isEmpty(){
  return !this.head ;
  }
  
  
//  ✓ Clear the linked list
  clear() {
    this.head = null; 
  }
  // toArray() {}
  // containsDuplicates() {}
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
