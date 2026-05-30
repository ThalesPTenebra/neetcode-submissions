class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // I can do n^2 looking for

        for (let i = 0; i < nums.length - 1; i++){
            for(let j = i + 1; j < nums.length; j++){
                if(nums[i] === nums[j]) return true
            }
        }

        return false
    }
}
