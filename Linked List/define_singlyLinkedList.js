class Node{
    constructor(val){
        this.val = val;
        this.next =null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        node = new SinglyLinkedList()
        if(!this.head){
            node = this.head
        }else{
            node = this.tail.next
        }
        this.length+=1
    }
}