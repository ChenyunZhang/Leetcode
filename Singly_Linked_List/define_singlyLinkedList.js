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
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail=this.head
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this;
    }

    // traverse(){
    //     let current = this.head
    //     while(current){
    //         console.log(current.val)
    //         currnet=current.next;
    //     }
    // }

    pop(){
        if(!this.head) return undefined
        let current = this.head
        let newTail = current
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }

    shift(){
        if(!this.head) return undefined
        let current = this.head
        this.head =current.next
        this.length --
        if(this.length === 0){
            this.tail = null
        }
        return current
    }
    unshift(value){
        let newNode = new Node(val = value)
        if(!head){
            this.head = newNode;
            this.tail = this.head
        }
        newNode.next = this.head
        this.head = newNode;
    }
}