class Node:
    def __init__(self,val):
        self.next = None
        self.val = val
class MyLinkedList:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.head = None
        self.length = 0

    def get(self, index: int) -> int:
        """
        Get the value of the index-th node in the linked list. If the index is invalid, return -1.
        """
        if not self.head:
            return -1
        if index > self.length - 1:
            return -1
        else:
            count = 0
            curr = self.head
            while count < index:
                curr = curr.next
                count += 1
            return curr.val

    def addAtHead(self, val: int) -> None:
        """
        Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
        """
        self.length += 1
        NewNode = Node(val)
        if not self.head:
            self.head = NewNode
        else: 
            NewNode.next = self.head
            self.head = NewNode

    def addAtTail(self, val: int) -> None:
        """
        Append a node of value val to the last element of the linked list.
        """
        self.length += 1
        NewNode = Node(val)
        if not self.head:
            self.head = NewNode
        last = self.head
        while last.next:
            last = last.next
        last.next = NewNode
        NewNode.next = None

    def addAtIndex(self, index: int, val: int) -> None:
        """
        Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
        """
        if index == 0:
            self.addAtHead(val)
        elif index == self.length:
            self.addAtTail(val)
        elif index < self.length:
            prev = self.head
            curr = self.head.next
            i = 1
            while i < index:
                prev = curr
                curr = curr.next
                i += 1
            NewNode = Node(val)
            prev.next = NewNode
            NewNode.next = curr
            self.length += 1
            
        

    def deleteAtIndex(self, index: int) -> None:
        """
        Delete the index-th node in the linked list, if the index is valid.
        """
        if index >= 0 and index < self.length:
            self.length -= 1
            if index == 0:
                self.head = self.head.next
            else:
                prev = self.head
                curr = self.head.next
                i = 1
                while i < index:
                    prev = curr
                    curr = curr.next
                    i += 1
                prev.next = curr.next

