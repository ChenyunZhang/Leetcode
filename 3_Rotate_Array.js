var rotate = function (nums, k) {
  for(let i=0; i<k ;i++){
    nums.unshift(nums.pop())
  }
  return nums
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);


// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]