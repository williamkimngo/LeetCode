/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while(l1 !== null || l2 !== null || sum > 0){
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        }
      //  console.log(head.val);
        head.val = sum;
      
       // console.log(head.val);
        
        if (l1 !== null || l2 !== null || carry > 0) {
            head.next = new ListNode(carry);
            head = head.next;
        }

        sum = carry;
        carry = 0;
    }

    return List;
};