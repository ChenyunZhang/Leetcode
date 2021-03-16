# Question https://leetcode.com/problems/remove-linked-list-elements/
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
            prev = ListNode()
            prev.next = head
            cur = head
            # make a copy of prev, because prev will contantly change in the loop
            dummy = prev
            while cur:
                if cur.val == val:
                    prev.next = cur.next
                else:
                    prev=cur
                cur=cur.next
            return dummy.next