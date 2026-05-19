class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        // counter - elected
        // [5,5,1,1,1,5,5]
        if(nums.length === 1) return nums[0]

        let counter = 1;
        let elected = nums[0]
        for(let i = 1; i < nums.length; i++){
            if(nums[i] === elected){
                counter++
            } else {
                counter--
            }
            
            if(counter === 0) {
                elected = nums[i]
                counter = 1;
            }
        }

        return elected
    }
}
