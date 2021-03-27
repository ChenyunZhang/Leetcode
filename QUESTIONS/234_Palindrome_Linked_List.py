# https://leetcode.com/problems/palindrome-linked-list/

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        cur, slow, fast = head, head, head
        length = 0
        stack = []
        while cur:
            cur = cur.next
            length += 1
        if length == 1:
            return True
        while fast and fast.next:
            fast = fast.next.next
            stack.append(slow.val)
            slow = slow.next
        if len(stack) == 0:
            return False
        if length % 2 != 0 and length > 1:
            stack.append(slow.val)

        while slow:
            if slow.val != stack[-1]:
                return False
            slow = slow.next
            stack.pop()
        if len(stack) > 0:
            return False
        return True