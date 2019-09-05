class LinkedListTester {
  constructor() {
    this.li = new LinkedList();
  }

  startTesting() {
    this.testInsert();
    this.testSearch();
    this.testShift();
    this.testPop();
    this.testFromArray();
    this.testDelete();
  }

  testInsert() {
    console.log('***Insert test***');
    this.li.insert(1);
    this.li.insert(2);
    this.li.insert(3);
    this.printList();
    console.log('***End of insert test***');
    console.log('');
    console.log('');
  }

  printList() {
    console.log('----LinkedList----');
    console.log(this.li.values());
    console.log('----LinkedList----');
  }

  testSearch() {
    console.log('***Search test***');
    console.log('Searching 101 in list: ', this.li.search(101));
    console.log('Searching 1 in list: ', this.li.search(1));
    console.log('***End of search test***');
    console.log('');
    console.log('');
  }

  testShift() {
    console.log('***Shift test***');

    const liSize = this.li.values().length;
    for(let i = 0; i < liSize; ++i) {
      let val = this.li.shift();
      console.log('shift val: ', val);
      this.printList();
    }

    console.log('***End of shift test***');
    console.log('');
    console.log('');
  }

  testPop() {
    console.log('***Pop test***');
    for(let i = 0; i < 10; ++i) {
      this.li.insert(i);
    }
    console.log('List before pop:');
    this.printList();
    console.log('');

    const listSize = this.li.values().length;
    for (let i = 0; i < listSize - 1; ++i) {
      this.li.pop();
    }
    this.printList();
    console.log('***End of pop test***');
    console.log('');
    console.log('');
  }

  testFromArray() {
    console.log('***fromArray test***');
    this.li.fromArray([3, 2, 1]);
    this.printList();
    console.log('***End of fromArray test***');
    console.log('');
    console.log('');
  }

  testDelete() {
    console.log('***delete test***');
    this.li.delete(3);
    this.printList();
    console.log('***End of delete test***');
  }
}
