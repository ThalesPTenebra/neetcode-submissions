class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for(let i = 0; i < nums.length; i++){
            map.set(nums[i], i)
        }

        // nums[i], target - nums[i]

        for(let i = 0; i < nums.length; i++){
            let rest = target - nums[i];

            const idx = map.get(rest);
            if(idx && i !== idx) return [i, idx]
        }
    }
}
