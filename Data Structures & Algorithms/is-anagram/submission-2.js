class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        // sort both
        let sSorted = Array.from(s).sort().join("")
        let tSorted = Array.from(t).sort().join("")
        
        // check if they are equal
        for(let i = 0; i < s.length; i++){
            if(sSorted[i] !== tSorted[i]) return false
        }

        return true
    }
}
