const nums = [2, 7, 11, 15];
const target = 9;

// output [0,1]

// ! pseudo code #####################################
// min length is more than 2
// if the length is 2, the out put will be [0,1]
// example: [2,3,4,2,2,2,7], output will be [0,6]
// record item will be key, index will be value. {2:0, 3:1, 4:2, ...}
// if target - key < 0, end the searching, no answer
// else find the complementary part

// ! pseudo code #####################################
// note 
// note javascript map doesn't have duplicate key.

var twoSum = function(nums, target) {
    let numsMap = new Map()
    let result = []
    nums.forEach((i,index)=> {
        let remainder = target - i
        if(numsMap.has(remainder)){
           result.push(numsMap.get(remainder),index)
        }else if(!numsMap.has(i)){
            numsMap.set(i,index)
        }
    })
    return result
};
