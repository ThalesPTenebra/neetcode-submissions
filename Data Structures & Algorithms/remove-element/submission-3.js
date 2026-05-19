class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        // 2 pointers solution, slow and fast

        let slow = 0; // k
        let fast = 0;
        while(fast < nums.length){
            if(nums[fast] === val){
                fast++
                continue
            } else {
                nums[slow] = nums[fast]
                fast++
                slow++
            }
        }

        return slow;
    }
}
