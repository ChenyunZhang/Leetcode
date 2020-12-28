// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

module.exports = steps;

// identify the bare minimum case to call the function
// give reasonable defaults to the bare minimum pieces of info
// check the base case

//iterative solution
// function steps(n) {
//     // from 0 to n(iterate through rows)
//     for (let row=0; row<n; row++){
//         // create an empty string, stair
//         let stair = "";
//         for(let col=0;col<n;col++){
//             if (col <= row){
//                 stair+="#"
//             }else{
//                 stair+=" "
//             }
//         }
//         console.log(stair)
//     }
// }

// Recursive solution
function steps(n,row=0,stair=""){
    if(n === row){
        return
    }
    if(n===stair.length){
        console.log(stair)
        return steps(n,row+1)
    }
    if(stair.length<=row){
        stair+="#"
    }else{
        stair+=" "
    }
    steps(n,row,stair)
}

steps(5)