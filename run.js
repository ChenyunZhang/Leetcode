const arr = [1,2,3]
const temp = arr.concat(3,4,5)
// console.log(temp)
// console.log(arr)
// console.log("abcda".lastIndexOf("a"))
// console.log("string".charCodeAt("s"))


// console.log(printName(name))

// ****************************************************************

function printName(name){
    return name
}

// var name = "Chenyun"

// const number = 7.87349237498274
// console.log(number.toFixed(2))
// console.log(number.round(2))

// ****************************************************************
// var a = 1
// function foo(){
//  var a = 2
//  console.log(a)
// }
// foo()
// console.log(a);
// guess 2,1

// ****************************************************************
// function foo(){
//     "use strict"
//     a = 2
//   }
// foo()
// console.log(a);

// guess 2 
// it prints 2, to avoid it, use "use strict"
// When we do assignments without declarations in JavaSacript (a=2), the compiler will save the variable in the global scope. FYI, we can fix this behavior by add "use strict".

// ****************************************************************

var answer = 0;
const baseValue = value => multipleValue => value * multipleValue;

// function baseValue(value){
//     return function(multipleValue){
//        return value * multipleValue;
//     }
//  }

const multiple = baseValue(2);
answer = multiple(5);
console.log(answer);

// 10