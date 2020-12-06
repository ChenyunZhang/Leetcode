// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// fist approach
// function reverse(str) {
//     let rev_str = ""
//     for(let i = str.length-1; i>=0;i--){
//         rev_str+=str[i]
//     }
//     return rev_str
// }

// second approach
// function reverse(str) {
//     return str.split("").reverse().join("")
// }

// third approach
function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}
