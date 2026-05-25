class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const duplicated = [...nums]

        for(const x of nums){
            duplicated.push(x)
        }

        return duplicated
    }
}
