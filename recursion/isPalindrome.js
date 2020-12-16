// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

    // add whatever parameters you deem necessary - good luck!
    // setup two pointers, left = 0 and right = str.length-1
    // setup a boolean isPal, default value true
    // base case: if right is smaller than left, return isPal
    // setup a helper function, reset isPal=false if str[left] !== str[right]
    // call helper(left+1,right-1)
// function isPalindrome(str){
//     let left = 0
//     let right = str.length-1
//     let isPal = true
//     const helper = (left,right) =>{
//         if(left>right) return
//         if(str[left] !== str[right]){
//             isPal = false
//         }
//         helper(left+1,right-1)
//     }
//     helper(left,right)
//     return isPal
//   }

  function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

  console.log(isPalindrome('tacocat'))