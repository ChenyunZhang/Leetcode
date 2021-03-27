class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        if not head: return
        prev = None
        while head:
            nex = head.next
            head.next = prev
            prev = head
            head = nex
        return prev