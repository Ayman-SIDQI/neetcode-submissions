class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const setNums = new Set(nums);
        // console.log(setNums)
        if (nums.length !== setNums.size){
            return true
        }
        return false
    }
}
