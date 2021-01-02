class Node{
    constructor(data){
        this.data=data
        this.chirdren=[]
    }

    add(data){
        this.children.push(new Node(data))
    }

    remove(data){
        this.chirdren.filter(node=>{
            return node.data !=data
        })
    }
}

class Tree{
    constructor(){
        this.root = null
    // every time you see width, it's bf
    traverseBF(fn){
        const arr = [this.root]
        while(arr.length){
            const node = arr.shift()
            arr.push(...node.children)
            fn(node)
        }
    }

    traverseDF(fn){
        const arr = [this.root]
        while(arr.length){
            const node = arr.shift()
            arr.unshift(...node.children)
            fn(node)
        }
    }
}