function reverseInt(n) {
    let reverse = 0
    let positive_n = n > 0 ? n : -n
    while( Math.floor(positive_n) > 0){
        let temp= positive_n%10
        positive_n = Math.floor(positive_n/10)
        reverse = reverse * 10 + temp
    }
    return n>=0 ? reverse : reverse*-1
}