class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        const n = nums.length
        const res = []
        nums.sort((a, b) => a - b)

        for(let i = 0; i < n - 3; i++){
            if(nums[i - 1] === nums[i]) continue
            for(let j = i + 1; j < n - 2; j++){
                if(nums[j - 1] === nums[j] && j > i + 1) continue
                // Lets find the rest based on the 2 pointers left
                let L = j + 1
                let R = n - 1;
                
                while(L < R){
                    let sum = nums[i] + nums[j] + nums[L] + nums[R]

                    if(sum === target){
                        res.push([nums[i], nums[j], nums[L], nums[R]])
                        L++;
                        R--;
                        while(nums[L] === nums[L - 1] && L < R) L++
                        while(nums[R] === nums[R + 1] && L < R) R--
                    } else if(sum < target){
                        L++;
                    } else {
                        R--;
                    }
                }
            }
        }

        return res
    }
}
