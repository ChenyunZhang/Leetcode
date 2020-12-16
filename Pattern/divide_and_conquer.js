// this pattern can tremendouly decrease time complixity
function linearSearch(arr,value){
    // add whatever parameters you deem necessary - good luck!
    for(let i in arr){
        if(arr[i] === value){
            return i
        }
    }
    return -1
  }
console.log(linearSearch([3],3))
