# https://leetcode.com/problems/odd-even-linked-list/


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def oddEvenList(self, head: ListNode) -> ListNode:
        # the order is odd to even
        # looping through the list, get rid of even node (and build the even node)
        # attached it to the odd linked list
        if not head: return
        
        even,prev = ListNode(),ListNode()
        cur,dummy = even,head
        while cur and cur.next:
            temp = cur.next
            even.next = temp
            cur.next = temp.next
            prev = cur
            cur = cur.next
            even = even.next
            even.next = None
        if not cur: 
            prev.next=dummy.next
        else:
            cur.next = dummy.next
        return head