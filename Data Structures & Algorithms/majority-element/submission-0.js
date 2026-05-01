class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let eleito = 0;
        let counter = 0;

        for(let i = 0; i < nums.length; i++){
            if(counter === 0){
                eleito = nums[i];
            }

            if(nums[i] === eleito){
                counter++;
            } else {
                counter--;
            }
        }

        return eleito
    }
}
