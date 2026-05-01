class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const auxNums = []
        for(const number of nums){
            if(auxNums.includes(number)) return true
            auxNums.push(number)
        }
        return false
    }
}
