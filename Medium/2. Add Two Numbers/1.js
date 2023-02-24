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
  if((l1.val+=l2.val)>9)l1.next?l1.next.val++:l1.next=new ListNode(1),l1.val-=10;
  if(l2.next){
    var a=l1.next||(l1.next=new ListNode()),b=l2.next;
    if((a.val+=b.val)>9)a.next?a.next.val++:a.next=new ListNode(1),a.val-=10;
    while((b=b.next)&&(a=a.next||(a.next=new ListNode())))if((a.val+=b.val)>9)a.next?a.next.val++:a.next=new ListNode(1),a.val-=10;
    a=a.next;
    while(a&&a.val>9)a.val-=10,a.next?a.next.val++:a.next=new ListNode(1),a=a.next;
  }
  if(l1.next&&l1.next.val>9){
    var a=l1.next;
    while(a&&a.val>9)a.val-=10,a.next?a.next.val++:a.next=new ListNode(1),a=a.next;
  }
  return l1;
};
