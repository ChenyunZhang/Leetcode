class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:

        dummy = ListNode()
        head = dummy
        dummy.next = l1
        while l1 != None and l2 != None:
            if l1.val <= l2.val:
                dummy.next = l1
                l1 = l1.next
            else:
                dummy.next = l2
                l2 = l2.next
            dummy = dummy.next

        if l1 != None:
            dummy.next = l1
        else:
            dummy.next = l2

        return head.next

    # create a dummy variable, pointed to the linked list
    # while l1 and l2 are not null, compare l1.val to l2.val, if l1.val is larger, dummy.next = l2.val, else dummy.next = l1.val
    # change dummy = dummy.next, until it one of the linked list is null
    # after one of the list is done, attached the rest of the other list to the linked list.
    # if l1 is null, dummy.next = l2, else dummy.next =l1
