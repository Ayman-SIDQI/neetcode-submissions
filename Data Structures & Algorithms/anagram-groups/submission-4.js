class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sortedS = {}
        for (let s of strs){
            let sorts = s.split('').sort().join('');
            if (!sortedS[sorts])
                sortedS[sorts] = [];
             sortedS[sorts].push(s);
        }
        return Object.values(sortedS)
    }
}
// strs sort one check if it exists if doesnt push a new spot, and push the unsorted element as value 
