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
        
        // a solucao que eu arrangei era 2N, e para um N?
        // for each item, I need it prefix * it postFix, not the item
        // so if I get for [i] the value of its prefix and then multiply by the sulfix
        // I can mantain the sulfix only in one number

        // 1- Lets calc prefix for [i]
        res[0] = 1;
        for(let i = 1; i < nums.length; i++){
            res[i] = nums[i - 1] * res[i - 1]
        } 

        let sulfix = 1;
        for(let i = nums.length - 1; i >= 0; i--){
            res[i] = sulfix * res[i]
            sulfix = sulfix * nums[i]
        }

        return res
    }

}
