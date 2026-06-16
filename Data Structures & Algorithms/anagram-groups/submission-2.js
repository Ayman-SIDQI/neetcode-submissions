class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sobj = {};
        for (const s of strs){
            const sortedS = s.split('').sort().join('');
            if (!sobj[sortedS])
                sobj[sortedS] = []
            sobj[sortedS].push(s);
        } 
        return Object.values(sobj)
    }
}
