var reverse = function(x) {
    let result = 0
    const MaxNum = 2**31 -1
    let negative = x < 1
    
    negative ? x*=-1 : x
    
    while ( x > 0 ){
        let lastDigit = x % 10
        result = result * 10 + lastDigit
        x = Math.floor(x/10)
    }
    if(result > MaxNum){
        return 0 
       }else if(negative){
                return result * -1
        }
    return result
    
};