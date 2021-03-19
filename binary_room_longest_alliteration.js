class Solution {
    solve(words) {
        if(words.length===0) return 0
        let res = 1, left = 0
        for(let i=1;i<words.length;i++){
            // starting from the second word, 
            // comparing the word with the previous word
            if(words[i][0]==words[i-1][0]){
            // updating the result here
                res= Math.max(res,i-left+1)
            }else{
            // update left when there is a mismatch
                left=i
            }
        }
        return res
    }
}
// two pointers approach 
// time complexity O(n), space complexity O(1)