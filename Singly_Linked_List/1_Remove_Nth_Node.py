// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// pseudocode

// setup two dummy nodes, one fast one slow, the distance inbewteen is n
// when fast goes to the last node, slow.next = slow.next.next, return dummy.next
// the condition will be when fast.next != null

#setup a dummy variable before head
dummy = ListNode()
dummy.next = head

#setup two nodes, starting at dummy point
slow = dummy
fast = dummy

while fast.next != None:
    fast = fast.next
    n -=1
    if n <0:
        slow = slow.next

slow.next = slow.next.next

return dummy.next
