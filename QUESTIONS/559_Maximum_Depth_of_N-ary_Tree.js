var maxDepth = function(root) {
    if(!root) return 0
    queue = [root]
    final = 0
    while(queue.length){
        let len = queue.length
        for(let i=0;i<len;i++){
            let node = queue.shift()
            for(let i of node.children){
                queue.push(i)
            }
        }
        final++
    }
    return final
};