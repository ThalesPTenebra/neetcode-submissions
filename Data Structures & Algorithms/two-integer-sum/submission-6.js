class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // target?
        // target - nums[i] = value we are looking for

        // let's create a map with value:index pair
        // for each value we look the the value that the sum = target
        // get it index
        const map = new Map()

        for(let i = 0; i < nums.length; i++){
            let value = target - nums[i]
            if(map.has(value)){
                return [map.get(value), i]
            }

            map.set(nums[i], i)
        }
    }
}
