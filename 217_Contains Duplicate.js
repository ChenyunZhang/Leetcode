// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

// var containsDuplicate = function (nums) {
//   let map = new Map();
//   for (const i in nums) {
//     if (map.has(nums[i])) {
//       return true;
//     } else {
//       map.set(nums[i], 1);
//     }
//   }
//   return false;
// };

var containsDuplicate = function (nums) {
  if (nums.length === 0) {
    return false
  }else{
      return new Set(nums).length === nums.length ? false : true
  }
};

console.log(containsDuplicate([]));
