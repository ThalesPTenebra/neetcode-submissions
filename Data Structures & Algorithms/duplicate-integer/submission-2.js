class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freq = new Set()

        for(const num of nums){
            if(!freq.has(num)){
                freq.add(num)
            } else {
                return true;
            }
        }

        return false
    }
}
