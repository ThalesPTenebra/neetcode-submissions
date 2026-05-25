class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const duplicated = new Array(nums.length * 2)

        for(let i = 0; i < nums.length; i++){
            duplicated[i] = nums[i]
            duplicated[i + nums.length] = nums[i]
        }

        return duplicated
    }
}
