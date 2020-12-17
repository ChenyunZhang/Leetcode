// setup two empty arrays, evenArr, and oddArr
// loop through the array
// check whether the element is even or odd, do it with modulo
// push even number to evenArr, odd number to oddArr
// concat the two arr into one, and return it

// var sortArrayByParity = function(A) {
//     const evenArr =[]
//     const oddArr =[]
//     for(let i of A){
//         if(i%2 === 0){
//             evenArr.push(i)
//         }else{
//             oddArr.push(i)
//         }
//     }
//     return evenArr.concat(oddArr)
// }


// var sortArrayByParity = function(A) {
        let noSwap = true
//     for(let i=A.length-1; i>=0;i--){
//         for(let j=i-1;j>=0;j--){
//             if(A[i]%2===0 && A[j]%2!==0){
//             //    ! important swap value in js
//                 [A[i],A[j]] = [A[j],A[i]]
                    noSwap = false
//                }
//         }
//     }
// if (noSwap) break
//     return A 
// };

// to optimize the solution, use a flag

