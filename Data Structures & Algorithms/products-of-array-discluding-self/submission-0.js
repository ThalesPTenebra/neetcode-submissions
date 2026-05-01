class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let aux;
        const res = []

        for(let i = 0; i < nums.length; i++){
            aux = nums[i];
            nums[i] = 1;
            res.push(nums.reduce((a, b) => a * b ))
            nums[i] = aux;
        }

        return res;
    }
}
