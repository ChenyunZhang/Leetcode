function binarySearch(arr,num){
    // add whatever parameters you deem necessary - good luck!
    let low = 0
    let high = arr.length-1
    
    
    while (low<=high){
        let guess = Math.floor((low+high)/2)
        if(arr[guess] === num){
            return guess
        }else if(arr[guess]<num){
            low = guess+1
        }else if(arr[guess]>num){
            high = guess-1
        }
        console.log(high)
    }
    return -1
  }
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11],11))