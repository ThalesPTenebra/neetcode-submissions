class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // Set a new Set object to store all the nums
        const set = new Set()

        for(const x of nums){
            if(set.has(x)) return true
            set.add(x)
        }

        // If this set size if != than the nums size, so there are duplicates
        return false
    }
}
