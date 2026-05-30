class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        // create a bucket sort array and then create a ordered one
        // O(N) T/S
        const bucket = [0, 0, 0]

        for(let i = 0; i < nums.length; i++){
            bucket[nums[i]]++
        }


        let counter = 0
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < bucket[i]; j++){
                nums[counter] = i
                counter++
            }
        }
    }
}
