var removeDuplicates = function(nums) {
  for(let i=0; i<nums.length; i++){
      if (i !== nums.lastIndexOf(nums[i])){
          nums.splice(i, nums.lastIndexOf(nums[i])-i)
      } 
  }
  return nums
};

console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 3, 3, 4]))

