class Solution {
    solve(nums) {
    //     const hash = {}
    //     for(let i in nums){
    //         hash[nums[i]] ? hash[nums[i]]+=1 : hash[nums[i]]=1
    //     }
    //   for(let i in hash){
    //       if(hash[i] === 1){
    //           return Number(i)
    //       }
    //   }
        if(nums.length===1){
            return nums[0]
        }
        const sort_nums = (nums.sort((a,b)=> a-b))
        
        for(let i=0; i<sort_nums.length;i++){
            if(sort_nums[i-1] !== sort_nums[i] && sort_nums[i+1] !== sort_nums[i]){
                return sort_nums[i]
            }
        }
    }
}