function validate(node,min=null,max=null){
    // for the left side, the parent node is the max
    // for the right side, the parent node is the min
    // update the paretn node when go to the next level
    // default the min and max to null
    if(max!=null && node.data>max){
        return false
    }
    if(min!=null && node.data<min){
        return false
    }

    if (node.left && !validate(node.left,min,node.data)){
        return false
    }
    if (node.right && !validate(node.right,node.data,max)){
        return false
    }
    return true
}