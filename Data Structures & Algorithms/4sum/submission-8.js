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
        
        nums.sort((a, b) => a - b)

        for(let i = 0; i < n - 3; i++){
            if(i > 0 && nums[i] === nums[i - 1]) continue
            for(let j = i + 1; j < n - 2; j++){
                if(j > i + 1 && nums[j] === nums[j - 1]) continue

                for(let k = j + 1; k < n - 1; k++){
                    if(k > j + 1 && nums[k] === nums[k - 1]) continue

                    for(let l = k + 1; l < n; l++){
                        if(l > k + 1 && nums[l] === nums[l - 1]) continue

                        let sum = nums[i] + nums[j] + nums[k] + nums[l]

                        if(sum === target){
                            let hash = `${nums[i]},${nums[j]},${nums[k]},${nums[l]}`

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
