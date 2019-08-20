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
    const value = this.start.item;
    this.start = this.start.next;
    return value;
  }

  pop() {

  }
}




function testInsert() {
  li.insert(1);
  li.insert(2);
  li.insert(3);

  console.log('----LinkedList----');
  console.log(li.values());
  console.log('----LinkedList----');
}

function testSearch() {
  console.log('Searching 101 in list: ', li.search(101));
  console.log('Searching 1 in list: ', li.search(1));
}

function testShift() {
  let val = li.shift();
  console.log('shift val: ', val);
  console.log('----LinkedList----');
  console.log(li.values());
  console.log('----LinkedList----');

  val = li.shift();
  console.log('shift val: ', val);
  console.log('----LinkedList----');
  console.log(li.values());
  console.log('----LinkedList----');
}

const li = new LinkedList();
testInsert();
console.log('\n');
testSearch();
console.log('\n');
testShift();
