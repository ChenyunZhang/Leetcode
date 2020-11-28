// pseudocode
// for each item in the array, compare it with the first element
// if there is any letter is equal to all other elements, add it to a empty string ""
// setup an index to go through each letter
// set up an empty string to store the final result
// consider extreme case, when the array is enpty, return ""
// outter loop is used to increase the index in each elements, inner loop goes through all the elements

var longestCommonPrefix = function (strs) {
  let lcp = "";
  let index = 0;
  const first = strs[0];

  if (strs.length === 0) return lcp;

  while (index < first.length) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i].charAt(index) !== first.charAt(index)) return lcp;
    }
    lcp += first.charAt(index);
    index++;
  }
  return lcp;
};

// let lcp = ""

// if(strs.length === 0) return lcp

// let index = 0
// let first = strs[0]

// while(index < first.length){
//     for(let i=0; i<strs.length;i++){
//         if(strs[i].charAt(index) != first.charAt(index)) return lcp
//     }
//     lcp +=first.charAt(index)
//     index++
// }

// return lcp
