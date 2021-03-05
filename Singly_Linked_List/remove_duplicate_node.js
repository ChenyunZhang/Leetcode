/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */


// Given a singly linked list node, remove nodes with duplicate values 
// while maintaining relative order of the original list.
// example: [1,2,1,3] 
// output: [1,2,3]

class Solution {
    solve(root) {
        let node = root
        const hash = {}
        let prev

        while(node){
            if(hash[node.val]){
                prev.next = node.next
            }else{
                hash[node.val]=1
                prev = node
            }
            node =node.next
        }
        return root
    }
}


// class Solution {
//     solve(node) {
//         let hashy = {}
//         let point = node
//         let slow
//         while (point) {
//             if (hashy[point.val]) {
//                 slow.next = point.next
//             } else {
//                 hashy[point.val] = 1
//                 slow = point
//             }
//             point = point.next
//         }
//         return node
//     }
// }