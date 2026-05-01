class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        let rest;

        for(let i = 0; i < nums.length; i++) {
            rest = target - nums[i];
            if(map.has(rest)) {
                return [map.get(rest), i];
            }

            map.set(nums[i], i);
        }

        return [0, 1]
    }
}
