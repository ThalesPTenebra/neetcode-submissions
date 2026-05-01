class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        // 1 <> nums.length
        // check for each sliding window 
        let res = 0

        for(let i = 0; i < nums.length; i++){
            let sum = 0;
            for(let j = i; j < nums.length; j++){
                sum += nums[j]
                if(sum === k) res++
            }
        }

        return res
    }
}
