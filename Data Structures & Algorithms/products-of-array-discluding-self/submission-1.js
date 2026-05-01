class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // 1,2,3,4,5

    // 1,2,6,24,120
    // 120,120,60,20,5

    // 120,60,30,30,24

    productExceptSelf(nums) {
        const res = new Array(nums.length)
        const prefix = new Array(nums.length + 1).fill(1)
        const sulfix = new Array(nums.length + 1).fill(1)
        console.log(prefix, sulfix)

        for(let i = 1; i < prefix.length; i++){
            prefix[i] = nums[i - 1] * prefix[i - 1]
        }
        for(let i = sulfix.length - 2; i >= 0; i--){
            sulfix[i] = nums[i] * sulfix[i + 1]
        }

        console.log(prefix, sulfix)

        // Res[i] = multiply prefix[i - 1] * sulfix[i + 1]
        for(let i = 0; i < nums.length; i++){
            res[i] = prefix[i] * sulfix[i + 1]
        }

        return res
    }

}
