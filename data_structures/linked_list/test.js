function printList(list) {
  console.log('----LinkedList----');
  console.log(list.values());
  console.log('----LinkedList----');
}

function testInsert() {
  console.log('***Insert test***');
  li.insert(1);
  li.insert(2);
  li.insert(3);
  printList(li);
  console.log('***End of insert test***');
}

function testSearch() {
  console.log('***Search test***');
  console.log('Searching 101 in list: ', li.search(101));
  console.log('Searching 1 in list: ', li.search(1));
  console.log('***End of search test***');
}

function testShift() {
  console.log('***Shift test***');
  let val = li.shift();
  console.log('shift val: ', val);
  printList(li);

  val = li.shift();
  console.log('shift val: ', val);
  printList(li);
  console.log('***End of shift test***');
}

function testPop() {
  console.log('***Pop test***');
  const listSize = li.values().length;
  for (let i = 0; i < listSize - 1; ++i) {
    li.pop();
  }
  printList(li);
  console.log('***End of pop test***');
}

const li = new LinkedList();
testInsert();
console.log('\n');
testSearch();
console.log('\n');

for(let i = 0; i < 10; ++i) {
  li.insert(i);
}
console.log('List before pop:');
printList(li);
console.log('');
testPop();
