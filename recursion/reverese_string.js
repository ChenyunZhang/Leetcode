// write a function that takes a string, return a new string in reverse
// function reverse(str) {
//   let new_str = []
//   const helper = (str) =>{
//     if(str.length === 0){return}
//     let temp = str[0]
//     str = str.substring(1)
//     helper(str)
//     new_str.push(temp)
//   }
//   helper(str)
//   return new_str.join("")
// }

// alternative solution
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

console.log(reverse("abc"))

  // add whatever parameters you deem necessary - good luck!
  // base case: when input string is empty
  // reccurrance relation: keep shifting the first letter in the string.
