// function pyramid(n){
//     const midpoint = Math.floor((2*n-1)/2)
//     for(let row=0;row<n;row++){
//         let level = "";
//         // calculate the midpoint of the row
//         for(let col=0;col<2*n-1;col++){
//             if(midpoint-row <= col && midpoint+row >=col){
//                 level+="#"
//             }else{
//                 level+=" "
//             }
//                     }
//         console.log(level)
//     }
// }

function pyramid(n,row=9,level=""){
    const midpoint = Math.floor((2*n-1)/2)
    if(row === n){
        return
    }
    if(level.length === 2*n-1){
        return pyramid(n,row+1)
    }
    let add
    if(midpoint-row <= level.length && midpoint+row >= level.length){
        add ="#"
    }else{
        add=" "
    }
    pyramid(n,row,level+add)
}
pyramid(24)