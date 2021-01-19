const { Compare, defaultCompare, defaultEquals } = require('./util');
console.log(defaultEquals)
// 栈类对象
const Stack = class Stack {
    constructor() {
      this.count = 0;
      this.items = {};
    }
    push(element) {
      this.items[this.count] = element;
      this.count++;
    }
    pop() {
      if (this.isEmpty()) {
        return undefined;
      }
      this.count--;
      const result = this.items[this.count];
      delete this.items[this.count];
      return result;
    }
    peek() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.items[this.count - 1];
    }
    isEmpty() {
      return this.count === 0;
    }
    size() {
      return this.count;
    }
    clear() {
      /* while (!this.isEmpty()) {
          this.pop();
        } */
      this.items = {};
      this.count = 0;
    }
    toString() {
      if (this.isEmpty()) {
        return '';
      }
      let objString = `${this.items[0]}`;
      for (let i = 1; i < this.count; i++) {
        objString = `${objString},${this.items[i]}`;
      }
      return objString;
    }
  }


// 栈类数组
  const StackArray = class StackArray {
    constructor() {
      this.items = [];
    }
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    clear() {
      this.items = [];
    }
  
    toArray() {
      return this.items;
    }
  
    toString() {
      return this.items.toString();
    }
  }

  // 队列
  const Queue = class Queue {
    constructor() {
      this.count = 0;
      this.lowestCount = 0;
      this.items = {};
    }
  
    enqueue(element) {
      this.items[this.count] = element;
      this.count++;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return undefined;
      }
      const result = this.items[this.lowestCount];
      delete this.items[this.lowestCount];
      this.lowestCount++;
      return result;
    }
  
    peek() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.items[this.lowestCount];
    }
  
    isEmpty() {
      return this.size() === 0;
    }
  
    clear() {
      this.items = {};
      this.count = 0;
      this.lowestCount = 0;
    }
  
    size() {
      return this.count - this.lowestCount;
    }
  
    toString() {
      if (this.isEmpty()) {
        return '';
      }
      let objString = `${this.items[this.lowestCount]}`;
      for (let i = this.lowestCount + 1; i < this.count; i++) {
        objString = `${objString},${this.items[i]}`;
      }
      return objString;
    }
  }

//  双端队列
  const Deque = class Deque {
    constructor() {
      this.count = 0;
      this.lowestCount = 0;
      this.items = {};
    }
  
    addFront(element) {
      if (this.isEmpty()) {
        this.addBack(element);
      } else if (this.lowestCount > 0) {
        this.lowestCount--;
        this.items[this.lowestCount] = element;
      } else {
        for (let i = this.count; i > 0; i--) {
          this.items[i] = this.items[i - 1];
        }
        this.count++;
        this.items[0] = element;
      }
    }
  
    addBack(element) {
      this.items[this.count] = element;
      this.count++;
    }
  
    removeFront() {
      if (this.isEmpty()) {
        return undefined;
      }
      const result = this.items[this.lowestCount];
      delete this.items[this.lowestCount];
      this.lowestCount++;
      return result;
    }
  
    removeBack() {
      if (this.isEmpty()) {
        return undefined;
      }
      this.count--;
      const result = this.items[this.count];
      delete this.items[this.count];
      return result;
    }
  
    peekFront() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.items[this.lowestCount];
    }
  
    peekBack() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.items[this.count - 1];
    }
  
    isEmpty() {
      return this.size() === 0;
    }
  
    clear() {
      this.items = {};
      this.count = 0;
      this.lowestCount = 0;
    }
  
    size() {
      return this.count - this.lowestCount;
    }
  
    toString() {
      if (this.isEmpty()) {
        return '';
      }
      let objString = `${this.items[this.lowestCount]}`;
      for (let i = this.lowestCount + 1; i < this.count; i++) {
        objString = `${objString},${this.items[i]}`;
      }
      return objString;
    }
  }

// 链数据结构

  class Node {
    constructor(element, next) {
      this.element = element;
      this.next = next;
    }
  }
  class DoublyNode extends Node {
    constructor(element, next, prev) {
      super(element, next);
      this.prev = prev;
    }
  }
  class LinkedList {
    constructor(equalsFn = defaultEquals) {
      this.equalsFn = equalsFn;
      this.count = 0;
      this.head = undefined;
    }
    push(element) {
      const node = new Node(element);
      let current;
      if (this.head == null) {
        // catches null && undefined
        this.head = node;
      } else {
        current = this.head;
        while (current.next != null) {
          current = current.next;
        }
        current.next = node;
      }
      this.count++;
    }
    getElementAt(index) {
      if (index >= 0 && index <= this.count) {
        let node = this.head;
        for (let i = 0; i < index && node != null; i++) {
          node = node.next;
        }
        return node;
      }
      return undefined;
    }
    insert(element, index) {
      if (index >= 0 && index <= this.count) {
        const node = new Node(element);
        if (index === 0) {
          const current = this.head;
          node.next = current;
          this.head = node;
        } else {
          const previous = this.getElementAt(index - 1);
          node.next = previous.next;
          previous.next = node;
        }
        this.count++;
        return true;
      }
      return false;
    }
    removeAt(index) {
      if (index >= 0 && index < this.count) {
        let current = this.head;
        if (index === 0) {
          this.head = current.next;
        } else {
          const previous = this.getElementAt(index - 1);
          current = previous.next;
          previous.next = current.next;
        }
        this.count--;
        return current.element;
      }
      return undefined;
    }
    remove(element) {
      const index = this.indexOf(element);
      return this.removeAt(index);
    }
    indexOf(element) {
      let current = this.head;
      for (let i = 0; i < this.size() && current != null; i++) {
        if (this.equalsFn(element, current.element)) {
          return i;
        }
        current = current.next;
      }
      return -1;
    }
    isEmpty() {
      return this.size() === 0;
    }
    size() {
      return this.count;
    }
    getHead() {
      return this.head;
    }
    clear() {
      this.head = undefined;
      this.count = 0;
    }
    toString() {
      if (this.head == null) {
        return '';
      }
      let objString = `${this.head.element}`;
      let current = this.head.next;
      for (let i = 1; i < this.size() && current != null; i++) {
        objString = `${objString},${current.element}`;
        current = current.next;
      }
      return objString;
    }
  }
// 双端链数据结构
  class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
      super(equalsFn);
      this.tail = undefined;
    }
    push(element) {
      const node = new DoublyNode(element);
      if (this.head == null) {
        this.head = node;
        this.tail = node; // NEW
      } else {
        // attach to the tail node // NEW
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
      this.count++;
    }
    insert(element, index) {
      if (index >= 0 && index <= this.count) {
        const node = new DoublyNode(element);
        let current = this.head;
        if (index === 0) {
          if (this.head == null) { // NEW
            this.head = node;
            this.tail = node; // NEW
          } else {
            node.next = this.head;
            this.head.prev = node; // NEW
            this.head = node;
          }
        } else if (index === this.count) { // last item NEW
          current = this.tail;
          current.next = node;
          node.prev = current;
          this.tail = node;
        } else {
          const previous = this.getElementAt(index - 1);
          current = previous.next;
          node.next = current;
          previous.next = node;
          current.prev = node; // NEW
          node.prev = previous; // NEW
        }
        this.count++;
        return true;
      }
      return false;
    }
    removeAt(index) {
      if (index >= 0 && index < this.count) {
        let current = this.head;
        if (index === 0) {
          this.head = this.head.next;
          // if there is only one item, then we update tail as well //NEW
          if (this.count === 1) {
            // {2}
            this.tail = undefined;
          } else {
            this.head.prev = undefined;
          }
        } else if (index === this.count - 1) {
          // last item //NEW
          current = this.tail;
          this.tail = current.prev;
          this.tail.next = undefined;
        } else {
          current = this.getElementAt(index);
          const previous = current.prev;
          // link previous with current's next - skip it to remove
          previous.next = current.next;
          current.next.prev = previous; // NEW
        }
        this.count--;
        return current.element;
      }
      return undefined;
    }
    indexOf(element) {
      let current = this.head;
      let index = 0;
      while (current != null) {
        if (this.equalsFn(element, current.element)) {
          return index;
        }
        index++;
        current = current.next;
      }
      return -1;
    }
    getHead() {
      return this.head;
    }
    getTail() {
      return this.tail;
    }
    clear() {
      super.clear();
      this.tail = undefined;
    }
    toString() {
      if (this.head == null) {
        return '';
      }
      let objString = `${this.head.element}`;
      let current = this.head.next;
      while (current != null) {
        objString = `${objString},${current.element}`;
        current = current.next;
      }
      return objString;
    }
    inverseToString() {
      if (this.tail == null) {
        return '';
      }
      let objString = `${this.tail.element}`;
      let previous = this.tail.prev;
      while (previous != null) {
        objString = `${objString},${previous.element}`;
        previous = previous.prev;
      }
      return objString;
    }
  }

// 环状数据链结构
  class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
      super(equalsFn);
    }
    push(element) {
      const node = new Node(element);
      let current;
      if (this.head == null) {
        this.head = node;
      } else {
        current = this.getElementAt(this.size() - 1);
        current.next = node;
      }
      // set node.next to head - to have circular list
      node.next = this.head;
      this.count++;
    }
    insert(element, index) {
      if (index >= 0 && index <= this.count) {
        const node = new Node(element);
        let current = this.head;
        if (index === 0) {
          if (this.head == null) {
            // if no node  in list
            this.head = node;
            node.next = this.head;
          } else {
            node.next = current;
            current = this.getElementAt(this.size());
            // update last element
            this.head = node;
            current.next = this.head;
          }
        } else {
          const previous = this.getElementAt(index - 1);
          node.next = previous.next;
          previous.next = node;
        }
        this.count++;
        return true;
      }
      return false;
    }
    removeAt(index) {
      if (index >= 0 && index < this.count) {
        let current = this.head;
        if (index === 0) {
          if (this.size() === 1) {
            this.head = undefined;
          } else {
            const removed = this.head;
            current = this.getElementAt(this.size() - 1);
            this.head = this.head.next;
            current.next = this.head;
            current = removed;
          }
        } else {
          // no need to update last element for circular list
          const previous = this.getElementAt(index - 1);
          current = previous.next;
          previous.next = current.next;
        }
        this.count--;
        return current.element;
      }
      return undefined;
    }
  }
// 仿栈链数据结构
  class StackLinkedList {
    constructor() {
      this.items = new DoublyLinkedList();
    }
    push(element) {
      this.items.push(element);
    }
    pop() {
      if (this.isEmpty()) {
        return undefined;
      }
      const result = this.items.removeAt(this.size() - 1);
      return result;
    }
    peek() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.items.getElementAt(this.size() - 1).element;
    }
    isEmpty() {
      return this.items.isEmpty();
    }
    size() {
      return this.items.size();
    }
    clear() {
      this.items.clear();
    }
    toString() {
      return this.items.toString();
    }
  }
  
// 仿排序链数据结构
  class SortedLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
      super(equalsFn);
      this.equalsFn = equalsFn;
      this.compareFn = compareFn;
    }
    push(element) {
      if (this.isEmpty()) {
        super.push(element);
      } else {
        const index = this.getIndexNextSortedElement(element);
        super.insert(element, index);
      }
    }
    insert(element, index = 0) {
      if (this.isEmpty()) {
        return super.insert(element, index === 0 ? index : 0);
      }
      const pos = this.getIndexNextSortedElement(element);
      return super.insert(element, pos);
    }
    getIndexNextSortedElement(element) {
      let current = this.head;
      let i = 0;
      for (; i < this.size() && current; i++) {
        const comp = this.compareFn(element, current.element);
        if (comp === Compare.LESS_THAN) {
          return i;
        }
        current = current.next;
      }
      return i;
    }
  }


  module.exports = {
    Stack,
    StackArray,
    Queue,
    Deque,
    LinkedList,
    DoublyLinkedList,
    CircularLinkedList,
    StackLinkedList
  }