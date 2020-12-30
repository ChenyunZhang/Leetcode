class Stack {
    constructor(){
        this.data = []
    }
    push(ele){
        return this.data.push(ele)
    }
    pop(){
        return this.data.pop()
    }
    
    peek(){
        return this.data[this.data.length-1]
    }
}