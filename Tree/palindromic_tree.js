/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */
class Solution {
    // it's a in-order traversal
    // define a empty array, and a helper function to check the node
    // push all the values into the array
    // use two pointers to check if there is any value not equal to each other, if the if statement never got executed, return true.
    solve(root) {
        let arr = []
        const helper = (node) =>{
        if(node.left){
            helper(node.left)
        }
        arr.push(node.val)
        if(node.right){
            helper(node.right)
        }
        
    }
        if(root){
            helper(root)
        }
        
        let right = arr.length-1
        let left = 0
        while (left<right){
            if(arr[right] != arr[left]){
                return false
            }
            left++
            right--
        }
        return true
    }
}


