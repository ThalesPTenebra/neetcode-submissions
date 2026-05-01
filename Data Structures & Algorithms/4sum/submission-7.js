class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        const n = nums.length
        const res = []

        const hashSet = new Set()

        for(let i = 0; i < n - 3; i++){
            for(let j = i + 1; j < n - 2; j++){
                for(let k = j + 1; k < n - 1; k++){
                    for(let l = k + 1; l < n; l++){
                        let sum = nums[i] + nums[j] + nums[k] + nums[l]

                        if(sum === target){
                            let hash = `${nums[i]},${nums[j]},${nums[k]},${nums[l]}`
                            hash = hash.split(",").sort((a, b) => a - b).join(",")

                            if(!hashSet.has(hash)){
                                res.push([nums[i], nums[j], nums[k], nums[l]])
                                hashSet.add(hash)
                            }

                        }
                    }
                }
            }
        }

        return res;
    }
}
