var canVisitAllRooms = function(rooms) {
    sseen = rooms.map(x => false)
    seen[0] = true
    stack = [0]
    while(stack.length>0){
        let temp = stack.pop()
        for(let i of rooms[temp]){
            if(!seen[i]){
               seen[i]=true
               stack.push(i)
               }   
        }
    }
    return seen.every(x => x==true)
};