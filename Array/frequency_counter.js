function sameFrequency(num1,num2){
    // good luck. Add any arguments you deem necessary.
    const strNum1 = num1.toString()
    const strNum2 = num2.toString()

    const hashFrequency =(str) =>{
      const hash = {}
      for(let i of str){
        hash[i] ? hash[i]+=1 : hash[i]=1
      }
      return hash
    }
    const hash1 = hashFrequency(strNum1)
    const hash2 = hashFrequency(strNum2)

    for(let i in hash1){
      if(hash1[i] !== hash2[i]){
        return false
      }
    }
    return true
    }

console.log(sameFrequency(123,222))
