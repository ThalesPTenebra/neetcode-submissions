class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = [...nums]

        for(const val of nums){
            ans.push(val)
        }

        return ans
    }
}
