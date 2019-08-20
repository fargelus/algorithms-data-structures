class Node {
  constructor(x, node) {
    this.item = x;
    this.next = node;
  }
}


class LinkedList {
  constructor() {
    this.start = null;
  }

  values() {
    const values = [];
    let iterNode = this.start;
    while(iterNode) {
      values.push(iterNode.item);
      iterNode = iterNode.next;
    }

    return values;
  }

  // TODO обдумать + цикл for of
  fromArray(){

  }

  search(x) {
    let iterNode = this.start;
    let result = false;
    while (iterNode) {
      if (iterNode.item === x) {
        result = true;
        break;
      }
      iterNode = iterNode.next;
    }

    return result;
  }

  insert(x) {
    const tmp = this.start;
    this.start = new Node(x, tmp);
  }

  delete(x) {
    
  }

  shift() {

  }

  pop() {

  }
}


const li = new LinkedList();
li.insert(1);
li.insert(2);
li.insert(3);
console.log(li.search(101));

console.log(li.values());
