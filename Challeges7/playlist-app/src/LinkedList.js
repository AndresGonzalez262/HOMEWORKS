class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  getSongs() {
    let current = this.head;
    const songs = [];
    while (current) {
      songs.push(current.value);
      current = current.next;
    }
    return songs;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

export default LinkedList;
