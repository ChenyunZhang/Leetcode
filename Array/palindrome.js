// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// note my solution
// function palindrome(str) {
//     let len=str.length-1
//     for(let i of str){
//         if(i !== str[len]){
//             return false
//         }
//         len--
//     }
//     return true
// }

// note alternative approach， use every method
function palindrome(str) {
    return str.split("").every((char,i) => {
        return char === str[str.length - i -1]
    })
}


// note alternative approach
// function palindrome(str) {
//     const reversed = str.split("").reverse().join("")
//     return str === reversed
// }