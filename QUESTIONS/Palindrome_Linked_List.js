var isPalindrome = function(head) {
    if(!head) return true
    let prev=null, cur=head,fast=head
    while(fast && fast.next){
            fast=fast.next.next
            cur=cur.next
        }
    while(cur){
        let temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
    }
    let node=head
    while(prev){
        if(prev.val!==node.val) return false
        prev=prev.next
        node=node.next
    }
    return true
};