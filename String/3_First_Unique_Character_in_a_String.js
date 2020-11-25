var firstUniqChar = function(s) {
    const strMap = new Map()
    const arr = []
    
    for(let i = 0; i<s.length ;i++){
       if(strMap.has(s[i])){
           strMap.set(s[i], false)
       }else{
           strMap.set(s[i], true)
       }
    }
    
    
    
    for(let i=0; i<s.length;i++){
       if( strMap.get(s[i]) === true){
          return s.indexOf(s[i])
        }
    }
    return -1
    
};