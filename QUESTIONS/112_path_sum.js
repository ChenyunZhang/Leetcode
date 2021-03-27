var hasPathSum = function(root, targetSum) {
    if(!root) return false
    let arr = [false]
    dfs(root,root.val,targetSum)
    return arr[0]
    
    function dfs(node,sum,targetSum){
    if(node){
        if(node.left) dfs(node.left,sum+node.left.val,targetSum)
        if(node.right) dfs(node.right,sum+node.right.val,targetSum)
        if(!node.left && !node.right && sum === targetSum){
        arr[0]=true
    }}}
};


var hasPathSum = function(root, targetSum) {
    if(!root) return false
    if(!root.left && !root.right && root.val == targetSum) return true
    targetSum-=root.val
    return hasPathSum(root.left,targetSum) || hasPathSum(root.right,targetSum)
};