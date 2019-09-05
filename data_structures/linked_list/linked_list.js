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

  fromArray() {

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
    const value = this.start.item;
    this.start = this.start.next;
    return value;
  }

  pop() {
    let currentNode = this.start;
    let lastNode;
    let prevNode;

    do {
      prevNode = lastNode;
      lastNode = currentNode;
      currentNode = currentNode.next;
    } while (currentNode);

    let item = lastNode.item;
    if (!prevNode) {
      this.start = null;
    } else {
      prevNode.next = null;
    }

    return item;
  }
}
