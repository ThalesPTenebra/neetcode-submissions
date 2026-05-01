class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // Set a new Set object to store all the nums
        const set = new Set([...nums])

        // If this set size if != than the nums size, so there are duplicates
        if(nums.length !== set.size) return true

        return false
    }
}
