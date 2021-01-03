// function selectionSort(arr){
//     const swap = (arr,index1,index2) =>{
//         ([arr[index1], arr[index2]] =[arr[index2], arr[index1]])
//     }
//     for(let i = 0; i<arr.length; i++){
//         let lowest = i
//         for( let j = i+1; j<arr.length; j++){
//             if (arr[lowest] > arr[j]){
//                 lowest = j
//             }
//         }
//         if(i != lowest) swap(arr,i,lowest)
 
//     }
//     return arr
// }

// console.log(selectionSort([0,1,2,232,34,1231,3,123]))
function selectionSort(arr){
    for(let i = 0;i<arr.length;i++){
        let indexOfMin = i;
        for (let j=i+1;j<arr.length;j++){
            if(arr[j] < arr[indexOfMin]){
                indexOfMin = j
            }
        }
        if (indexOfMin !== i){
            [arr[indexOfMin],arr[i]] = [arr[i],arr[indexOfMin]]
        }
    }
    return arr
}