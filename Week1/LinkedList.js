class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.val)
            current = current.next;
        }
    }

    addFirst(value) {
        this.head = new Node(value, this.head);
        this.size++
    }

    addLast(value) {
        let newNode = new Node(value)
        if (this.head == null) {
            this.head = new Node(value);
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index == 0) {
            this.head = new Node(value, this.head)
            return
        }
        let newNode = new Node(value);
        let current = this.head;
        let count = 0;
        let prev;
        while (count < index) {
            prev = current;
            current = current.next;
            count++;
        }
        newNode.next = current;
        prev.next = newNode;
        this.size++;
    }

    getAt(index) {
        if (index < 0 || index > this.size) {
            return null;
        }
        let current = this.head
        let count = 0
        while (count < index) {
            current = current.next
            count++
        }
        return current;
    }

    removedAt(index) {
        if (index < 0 || index > this.size) {
            return null;
        }
        if (index == 0) {
            this.head = this.head.next
            return
        }
        let current = this.head;
        let priv = null;
        let count = 0
        while (count < index) {
            priv = current;
            current = current.next
            count++
        }
        priv.next = current.next;
        this.size--;
    }

    clear(){
        this.head = null;
        this.size = 0;
    }
}

let ls = new LinkedList();
ls.addFirst(100)
ls.addFirst(200)
ls.addFirst(300)
ls.addFirst(400)
ls.removedAt(10)
ls.print();