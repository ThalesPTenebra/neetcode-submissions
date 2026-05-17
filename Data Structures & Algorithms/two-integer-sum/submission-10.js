class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // Create a hashMap value:index
        const map = new Map()

        // loop nums looking for the rest in the map, rest = target - nums[i]
        for(let i = 0; i < nums.length; i++){
            let rest = target - nums[i]
            if(map.has(rest)){
                return [i, map.get(rest)]
            }

            map.set(nums[i], i)
        }
    }
}
