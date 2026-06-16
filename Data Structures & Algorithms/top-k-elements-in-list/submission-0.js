class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let nobj = {};
        for (let n of nums) {
        if (!nobj[n]) {
            nobj[n] = 0;
        }
        nobj[n] = (nobj[n] | 0) + 1;
        }
        return( Object.entries(nobj).sort(([,v1],[,v2])=> v2 - v1)
        .slice(0, k)
        .map(([instance])=> Number(instance)))
    }
}
