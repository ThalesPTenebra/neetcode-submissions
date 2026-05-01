class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
         // 2 pointers
         // one will run the array looking for diferent numbers
         // one will be k
         // Fast and Slow
        if(nums.length <= 1){
            return nums.length
        }

        // [2,10,10,30,30,30]
         let k = 0;
         let j = 0;

         while(j < nums.length){
            if(nums[j] !== nums[k]){
                k++;
                nums[k] = nums[j];
            }
            j++
         }

         return k + 1;
    }
}
