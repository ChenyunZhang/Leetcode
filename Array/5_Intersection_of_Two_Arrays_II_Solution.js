var intersect = function(nums1, nums2) {
    const map = new Map()
    let result = []
    for(let i=0; i<nums1.length ; i++){
        if(map.has(nums1[i])){
            map.set(nums1[i],(map.get(nums1[i]))+1)
        }else{
            map.set(nums1[i], 1)
        }
    }
    
    for(let j=0; j<nums2.length ;j++){
        if(map.has(nums2[j]) && map.get(nums2[j])>0){
            result.push(nums2[j])
            map.set(nums2[j], map.get(nums2[j])-1)
           }
    }
   return result
};

// using a map to record the item in the array, the key value is its count
// this approach seems very slow