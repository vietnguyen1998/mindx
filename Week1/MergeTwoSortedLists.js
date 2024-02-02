/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

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

    AddFirst(val) {
        this.head = new Node(val, this.head);
        this.size = this.size + 1;
    }

    AddLast(value){
        this.head = new Node(this.head, value)
        this.size = this.size + 1;
    }

    Print() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.val + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}


// var mergeTwoLists = function (list1, list2) {
//     if (list1 == null || list2 == null)
//         return list1 == null ? list2 : list1;
//     if (list1.val > list2.val) {
//         let temp = list1;
//         list1 = list2;
//         list2 = temp;
//     }
//     list1.next = mergeTwoLists(list1.next, list2);
//     return list1;
// };

// let list1 = [1,2,4], list2 = [1,3,4]
// mergeTwoLists(list1, list2)
let ls = new LinkedList();
ls.AddFirst("xx1");
ls.AddLast("xx2");

ls.Print()