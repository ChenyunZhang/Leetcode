var fib = function(N) {
    // if(N <= 1){
    //     return N
    // }else{
    //     return fib(N-1) + fib(N-2)
    // }
    
};

    const memoize =(N) =>{
        
    }

    var fib = function(N) {
        if(N <= 1){
           return N
           }
        return memoize(N)
    };
    
    const memoize = (N) =>{
        let hash = {0:0, 1:1}
        
        for(let i=2; i < N+1 ;i++){
            hash[i] = hash[i-1] + hash[i-2]
        }
        return hash[N]
    }