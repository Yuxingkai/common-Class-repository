// import { Queue } from './class.js'
const allClass = require('./class.js');
// console.log(Queue)
// 击鼓传花游戏
const hotPotato = (elementsList, num) => {
  const queue = new allClass.Queue();
  const elimitatedList = [];
  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    elimitatedList.push(queue.dequeue());
  }

  return {
    eliminated: elimitatedList,
    winner: queue.dequeue()
  };
}

module.exports = {
    hotPotato
}
// let obj = hotPotato(['1','2','3'], 11)
// console.log(obj.eliminated)
// console.log(obj.winner)


const DoublyLinkedList = new allClass.DoublyLinkedList();

console.log(DoublyLinkedList)

DoublyLinkedList.push({name: '是1', id: 1})
DoublyLinkedList.push({name: '是2', id: 2})
DoublyLinkedList.push({name: '是3', id: 3})

// console.log(LinkedList.insert({name: '是4', id: 4}, 1))
console.log('++++++')
console.log(DoublyLinkedList)
console.log('++++++')
// console.log(LinkedList.getElementAt(1))
