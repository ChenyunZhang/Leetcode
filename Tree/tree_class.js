class Node{
    constructor(data){
        this.data=data
        this.chirdren=[]
    }

    add(data){
        const node = new Node(data)
        this.children.push(new Node(data))
    }

    remove(data){
        
    }
}