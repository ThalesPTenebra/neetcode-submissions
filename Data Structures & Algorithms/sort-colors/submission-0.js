class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const sorted = [0, 0, 0]

        for(const num of nums){
            sorted[num] += 1;
        }

        let counter = 0;
        for(let i = 0; i < sorted.length; i++){
            for(let j = 0; j < sorted[i]; j++){
                nums[counter] = i;
                counter++;
            }
        }
    }
}
