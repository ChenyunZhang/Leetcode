class Node {
    constructor(data,next = null){
        this.next = next
        this.data = data
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }

    insert(data){
        this.head = new Node(data, this.head)
        }
    
    size(){
        let counter = 0
        let node = this.head
        while(node){
            node = node.next
            counter+=1
        }
        return counter
    }

    getFirst(){
        return this.head
    }

    getLast(){
        if(!this.head) return null
        let node = this.head
        while(node){
            if(!node.next){
                return node
            }
            node = node.next
        }
    }

    clear(){
        this.head = null
    }

    removeFirst(){
        this.head = this.head.next
    }

    removeLast(){
        if(!this.head.next){
            this.head = null
            return;
        }
        let node = this.head
        let prev = node
        while (node.next){
            prev= node
            node = node.next
        }
        prev.next = null
    }

    insertLast(val){
        const last = this.getLast()

        if(last){
            last.next = new Node(val)
        }else{
            this.head = new Node(val)
        }
    }

    getAt(index){
        if(!this.head){
            return
        }
        let counter = 0
        let node = this.head
        while(node){
            if(counter == index){
                return node
            }
            counter++
            node = node.next
        }
        return null
    }

    removeAt(index){
        if (!this.head){
            return 
        }
        if(index === 0){
            this.head = this.head.next
            return
        }
        prev = this.getAt(index-1)
        if(!prev || prev.next){
             return
        }
        prev.next = prev.next.next
    }

    insertAt(data, index){
        // check the length 
        if (!this.head){
            this.head = new Node(data)
        }

        if(index == 0){
            this.head = new Node(data,this.head)
        }
        const prev = this.getAt(indexx-1) || this.getLast()
        const node = new Node(data, prev.next)
        prev.next = node
    }

    

}