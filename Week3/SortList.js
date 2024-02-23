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

    clear() {
        this.head = null;
        this.size = 0;
    }
}

/**
 * @param {number[]} nums
 * @return {number[]}
 * time O(nlogn)
 * space O(nlogn)
 */
var mergeSortedArray = function (left, right) {
    let i = 0, j = 0;
    var result = new LinkedList()
    while (left && right) {
        if (left.val < right.val) {
            result.addLast(left.val)
            left = left.next
        }
        else {
            result.addLast(right.val)
            right = right.next
        }
    }
    while (left) {
        result.addLast(left.val)
        left = left.next
    }
    while (right) {
        result.addLast(right.val)
        right = right.next
    }
    return result.head;
}

var sortArray = function (head) {
    if (GetSize(head) < 2)
        return head
    else {
        let middle = parseInt(GetSize(head) / 2) // 2'
        let _l = GetFromStart(head, middle)
        let _r = GetToEnd(head, middle)
        let left = sortArray(_l)
        let right = sortArray(_r)
        return mergeSortedArray(left, right)
    }
};

var GetSize = function (head) {
    let count = 0;
    let current = head;
    while (current) {
        count++
        current = current.next
    }
    return count;
}

var GetFromStart = function (head, num) {
    let count = 0
    let result = new LinkedList();
    current = head;
    while (count < num) {
        result.addLast(current.val)
        current = current.next
        count++
    }
    return result.head
}

var GetToEnd = function (head, num) {
    let count = 0
    let current = head;
    while (count < num) {
        current = current.next
        count++
    }
    return current
}

var ls1 = new LinkedList();
ls1.addLast(4)
ls1.addLast(1)
ls1.addLast(3)
ls1.addLast(2)


let v = sortArray(ls1.head)
''
// let vv = sortArray(ls.head)
// let a = GetSize(ls.head)
// let b = GetFromStart(ls.head, 2)
// let c = GetToEnd(ls.head, 2)


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function addLast(value, head) {
    let newNode = new ListNode(value)
    if (head == null) {
        head = new ListNode(value);
    } else {
        let current = head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    return head;
}

var mergeSortedArray2 = function (left, right) {
    let result = null;
    while (left && right) {
        if (left.val > right.val) {
            if (result == null)
                result = new ListNode(left.val)
            else
                result = new ListNode(left.val, result)
            left = left.next
        }
        else {
            if (result == null)
                result = new ListNode(right.val)
            else
                result = new ListNode(right.val, result)
            right = right.next
        }
    }
    while (left) {
        result = new ListNode(left.val, result)
        left = left.next
    }
    while (right) {
        result = new ListNode(right.val, result)
        right = right.next
    }
    return result;
}

var addFirst = function(value, head) {
    return new ListNode(value, head);
}

let xx = new ListNode(4)

let cc = new ListNode(2)

mergeSortedArray2(xx, cc)