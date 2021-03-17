# https://leetcode.com/problems/design-linked-list/

class Node(object):
    def __init__(self, val):
        self.val = val
        self.next = None
        self.prev = None


class MyLinkedList(object):

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.dummy_head = Node(0)
        self.dummy_tail = Node(0)
        self.dummy_tail.prev = self.dummy_head
        self.dummy_head.next = self.dummy_tail
        self.size = 0

    def get(self, index):
        if index < 0 or index >= self.size:
            return -1
        curr_node = self.dummy_head.next
        for __ in range(index):
            curr_node = curr_node.next
        return curr_node.val

    def addAtHead(self, val):
        node = Node(val)
        node.next = self.dummy_head.next
        node.prev = self.dummy_head
        self.dummy_head.next.prev = node
        self.dummy_head.next = node

        self.size += 1

    def addAtTail(self, val):
        node = Node(val)
        node.prev = self.dummy_tail.prev
        node.next = self.dummy_tail
        self.dummy_tail.prev.next = node
        self.dummy_tail.prev = node

        self.size += 1

    def addAtIndex(self, index, val):
        if index < 0 or index > self.size:
            return
        if index == 0:
            self.addAtHead(val)
        elif index == self.size:
            self.addAtTail(val)
        else:
            curr_node = self.dummy_head.next
            for __ in range(index - 1):
                curr_node = curr_node.next
            node = Node(val)
            node.next = curr_node.next
            node.prev = curr_node
            curr_node.next.prev = node
            curr_node.next = node

            self.size += 1

    def deleteAtIndex(self, index):
        if index < 0 or index >= self.size:
            return

        curr_node = self.dummy_head
        for __ in range(index):
            curr_node = curr_node.next
        curr_node.next.next.prev = curr_node
        curr_node.next = curr_node.next.next

        self.size -= 1