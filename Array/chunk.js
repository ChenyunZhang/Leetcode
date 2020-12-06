// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// i will want to use a loop here, reset the temp array each time
// when the length hit to the size
// 
function chunk(array, size) {
    let final = []
    let temp =[]
    for(let i in array){
        temp.push(array[i])
        if(temp.length === size){
            final.push(temp)
            temp = []
        }
    }
    temp.length !== 0 ? final.push(temp) : null
    return final
}

console.log(chunk([1, 2, 3, 4], 2))
