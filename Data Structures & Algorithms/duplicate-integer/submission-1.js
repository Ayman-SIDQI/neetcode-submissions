class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mySet = new Set(nums);
        console.log(mySet.size, " AND ", nums.length);
        if (mySet.size != nums.length)
            return true;
        return false;
    }
}
