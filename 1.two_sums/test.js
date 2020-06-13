/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (var i=0; i < nums.length; i++){
        for(var j=i+1; j< nums.length; j++){
            if(nums[i]+nums[j]==target) return [i,j];
        }
    }
    return;
};
console.log(twoSum([0,3,4,0],0)); 