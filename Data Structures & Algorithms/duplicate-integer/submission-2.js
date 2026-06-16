class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const s = new Set(nums);
        if (nums.length !== s.size)
            return true;
        return false
    }
}
