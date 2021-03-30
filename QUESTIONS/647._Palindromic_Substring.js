/**
 * @param {string} s
 * @return {number}
 */

// first approach 
// Time Complexity O(n^3)
// Space Complexit O(1)

 var countSubstrings = function(s) {
    let counter = 0, i = 0, j=0, final = 0
       while(++counter<=s.length){
          while(j+counter<=s.length){
              if(checkPalindrone(s.slice(i,j+counter))) final++
              i++
              j++
          }
           i=0
           j=0
    }
    return final
};

const checkPalindrone = s =>{
    let i=0,j=s.length-1
    while(i<=j){
           if(s[i]!==s[j]) return false
            i++
            j--
           }
    return true
}


// Second Approach Dynammic Programming
