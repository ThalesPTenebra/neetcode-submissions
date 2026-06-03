class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = new Array(nums.length + 1)
        prefix[0] = 1

        for(let i = 1; i <  prefix.length; i++){
            prefix[i] = nums[i - 1] * prefix[i - 1]
        }

        let suffix = 1
        const output = new Array(nums.length)
        for(let i = prefix.length - 1; i > 0; i--){
            output[i - 1] = prefix[i - 1] * suffix
            suffix *= nums[i - 1]
        }

        return output
    }
}
