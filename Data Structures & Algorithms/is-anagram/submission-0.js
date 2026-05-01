class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sorted1 = Array.from(s).sort().join()
        const sorted2 = Array.from(t).sort().join()

        return sorted1 === sorted2
    }
}
