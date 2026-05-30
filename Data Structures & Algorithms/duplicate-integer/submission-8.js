class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // I can do n^2 looking for
        const set = new Set()

        for(const x of nums){
            if(set.has(x)) return true

            set.add(x)
        }

        return false
    }
}
