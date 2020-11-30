# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        prev = None
        curr = head
        
        while curr != None:
            # first step is to store current node.next to a var
            nex = curr.next
            #second step is to break the linked list
            curr.next = prev
            # third step is to assign prev to the left broken linked list
            prev = curr
            # fourth step is to reassign curr to the right side of the broken linked list
            curr = nex

        return prev

#1. create dummy, dummy.next = None
#2. starting from node.val = 1
#3. dummy,next, head.next, head = head, dummy.next, head.next
#4. dummy -> 1 -< NULL
#5 iteration head = 2, dummy.next = 1




# recursively
    def reverseList(self, head: ListNode) -> ListNode:


