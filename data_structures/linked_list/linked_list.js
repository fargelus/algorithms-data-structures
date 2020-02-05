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

  fromArray(arr) {
    this.start = null;
    for(let i = arr.length - 1; i >= 0; --i) {
        this.insert(arr[i]);
    }
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
    let iterNode = this.start;
    let lastNode = iterNode;
    let prevNode;
    let found = false;

    do {
      prevNode = lastNode;
      lastNode = iterNode;
      if (lastNode.item === x) {
        found = true;
        break;
      }
      iterNode = iterNode.next;
    } while(iterNode);

    if (found) {
      // TODO
      prevNode.next = iterNode;
    }
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
