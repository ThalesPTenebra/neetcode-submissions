class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let n = nums.length
        const res = []
        const set = new Set()

        for(let i = 0; i < n; i++){
            for(let j = i + 1; j < n; j++){
                for(let k = j + 1; k < n; k++){
                    if(nums[i] + nums[j] + nums[k] === 0){
                        let hash = String(nums[i]) + String(nums[j]) + String(nums[k])
                        hash = Array.from(hash).sort().join("")
                        if(set.has(hash)) continue
                        set.add(hash)
                        res.push([nums[i], nums[j], nums[k]])
                    }
                }
            }
        }

        return res
    }
}
