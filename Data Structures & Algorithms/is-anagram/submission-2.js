class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        console.log(s, " AND ",t);
        console.log(s.split('').sort().join(''), " AND ",t.split('').sort().join(''));
        if (s.split('').sort().join('') === t.split('').sort().join(''))
            return true;
        return false
    }
}
