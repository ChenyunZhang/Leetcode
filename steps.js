function steps(n) {
    let result = ""
    for(let i=1;i<=n;i++){
        result+= (i * "#").concate((n-i)*" ")
    }
    return result
}

steps(4)


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
function steps(n) {
    if(n === 0){
        return
    }
    // think about the base case at the beginning the the recursion
    console.log(n)
    //make sure to change the argument everytime, in order for it to hit the base case
}

// console.log(steps(1))

module.exports = steps;

// identify the bare minimum case to call the function
// give reasonable defaults to the bare minimum pieces of info
// check the base case


function steps(n,row=0,stair="") {
    // define the base case
    if (n === row)return
    if(n === stair.length){
        console.log(stair)
        return steps(n, row+1)
    }
    if (stair.length <= row){
        stair+="#"
    }else{
        stair+=" "
    }
    steps(n,row,stair)
}

