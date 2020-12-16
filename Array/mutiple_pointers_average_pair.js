// write a function called averagePair, to find if there is a pair of values in the array where the average of the pair equals the target average.
function averagePair(arr,val){
    // add whatever parameters you deem necessary - good luck!
    let start = 0
    let end = arr.length-1
    while(end>start){
        let avg = (arr[start]+arr[end])/2
        if(val === avg) return true
        else if(val<avg) end--
        else start++
    }
    return false
  }

// setup two pointers, while the end pointer // hasn't meeted with the start pointer, keep moving the pointers
// while looping, constantly update the average value, and compare it and the target value
// if it's equal, return true, otherwise, compare if it's larger or smaller,
// if the average value is larger than the starting value, move the end pointer
// else move the start pointer.
// return false outside of the loop, if no pairs found