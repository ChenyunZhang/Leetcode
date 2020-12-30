class Queue{
    constructor(){
        this.data = []
    }
    
    add(record){
        this.data.unshift()
    }
    
    remove(){
        return this.data.pop()
    }

    peek(){
        return this.data[this.data.length-1]
    }

    weave(sourceOne,sourceTwo){
        const q = new Queue()
        while(sourceOne.peek() || sourceTwo.peek()){
            if(sourceOne.peek()){
                q.add(sourceOne.remove())
            }
            if(sourceTwo.peek()){
                q.add(sourceTwo.remove())
            }
        }
        return q
    }

}