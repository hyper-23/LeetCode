/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let result = 0;
    nums.reduce((prev, curr, ind) => {
        //break reduce loop early by cutting array if it needs more than 1 element change
        if(result > 2) nums.splice(ind, nums.length);
        if (prev > curr) {
            result++;
            if (ind >= 2 && curr < nums[ind - 2]) {
                return prev;
            }}
            return curr;
    });
    return result <= 1;
};

console.log(checkPossibility([4,2,3]))