class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sorterds =  s.split('').sort().join('');
        const sorterdt =  t.split('').sort().join('');
        console.log(sorterds, sorterdt);
        return (sorterds === sorterdt) ? true : false;
        
    }
}
