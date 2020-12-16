/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
class Solution {
    solve(node) {
        if(!node) return
        let current = node
        while(current && current.next){
            let temp=current.val
            current.val = current.next.val
            current.next.val = temp
            current = current.next.next
        }
        return node
    }
}