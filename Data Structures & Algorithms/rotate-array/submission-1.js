class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    invert(arr, start, end){
        while(start < end){
            let temp = arr[end - 1];
            arr[end - 1] = arr[start]
            arr[start] = temp
            start++
            end--    
        }
    }

    // k = 2 [0, 1, 2]
    rotate(nums, k) {
        k = k % nums.length 
        this.invert(nums, 0, nums.length)
        this.invert(nums, 0, k)
        this.invert(nums, k, nums.length)
    }
}
