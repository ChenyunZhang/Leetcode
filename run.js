// const arr = [1,2,3]
// const temp = arr.concat(3,4,5)
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

// var answer = 0;
// const baseValue = value => multipleValue => value * multipleValue;

// function baseValue(value){
//     return function(multipleValue){
//        return value * multipleValue;
//     }
//  }

// const multiple = baseValue(2);
// answer = multiple(5);
// console.log(answer);

// 10

// ****************************************************************
// function outerFunc(outerParam) {
//     function innerFunc(innerParam) {
//        outerParam["b"] = innerParam;
//        debugger
//     }
//     return innerFunc;
//   }
  
// const obj = {a:1}
// const example = outerFunc(obj);
// const answer = example(2)
// console.log(obj);

// answer
// obj{a:1,b:2}

// ***************************************************************************

// let arr =[1,2]
// function test(array){
//   array.push(3)
// }
// test(arr)
// console.log(arr)
// ***************************************************************************

// let arr =[1,2]
// function test(array){
//   array.push(3)
// }
// test([...arr])
// console.log(arr)

// ***************************************************************************

// let arr =[1,2]
// function test(array){
//   array = [1,2,3]
// }
// test(arr)
// console.log(arr)

// let arr =[1,2]
// function test(array){
//   arr = [1,2,3]
// }
// test(arr)
// console.log(arr)


// const carDetails= {
//     name: "Tomer",
//     getName(){
//        return this.name;
//     },
//   };
// var name = "Joe";
// var getCarName = carDetails.getName;
// console.log(getCarName());


// console.log(a)
// console.log(b)
// var a = 2
// var b = 2
// console.log(a)
// console.log(b)


// a()
// function a(){
//     console.log("a")
// }
// b()
// var b =function(){
//     console.log("b")
// }


// const arr = [1,2,3,4,5,6]
// const even = arr.filter(x => x%2===0)
// console.log(even)



function giveMeX(showX) {
    if (showX) {
      var x = 5;
    }
    return x;
  }
  
  console.log(giveMeX(false));
  console.log(giveMeX(true));

export 