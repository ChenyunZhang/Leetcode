var checkPossibility = function(nums) {
    let flag = nums[0]>nums[1] ? true:false
    for(let i=1;i<nums.length-1;i++){
        // make sure it's increasing
        if(nnums[i]>nums[i+1]){
            // if the element before the current element is greater than the next element, give the next element the current element's value
            if(nums[i-1]>nums[i+1]) nums[i+1]=nums[i]
            if(flag) return false
            flag = true
        }
    }
    return true
};