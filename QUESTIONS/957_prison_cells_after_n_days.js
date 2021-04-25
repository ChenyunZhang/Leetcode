var prisonAfterNDays = function(cells, n) {
    size = helper(cells,n)
    if(size != n && n%size!==0){
        n%=size
    }
    for(let j=0;j<n;j++){
        let arr = cells.map(value=>0)
        for(let i=1;i<cells.length-1;i++){
            if(cells[0]!=cells[1]) arr[i]=0
            if(cells[i-1] ==cells[i+1]) arr[i]=1
            if(cells[cells.length-1]!=cells[cells.length-2]) arr[arr.length-1]=0
        }
       cells=arr
    }
    return cells
};

function helper(cells,n){
    let set = new Set()
    let hasCycle = false
    for(let j=0;j<n;j++){
        let arr = cells.map(value=>0)
        for(let i=1;i<cells.length-1;i++){
            if(cells[0]!=cells[1]) arr[i]=0
            if(cells[i-1] ==cells[i+1]) arr[i]=1
            if(cells[cells.length-1]!=cells[cells.length-2]) arr[arr.length-1]=0
        }
       cells=arr
        if(!set.has(arr.join(""))){
            set.add(arr.join(""))
        }else{
            hasCycle=true
            break
        }
}
console.log(set.size)
    return set.size
}

console.log(prisonAfterNDays([1,0,0,1,0,0,1,0],1000000000))
