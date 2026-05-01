class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let eleito = nums[0]
        let count = 0

        for(const x of nums){
            if(x === eleito){
                count++;
            } else {
                count--;
            }

            if(count < 0) {
                count = 1;
                eleito = x;
            }
        }

        return eleito;

    }
}
