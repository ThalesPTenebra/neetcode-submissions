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
            if(i > 0 && nums[i] === nums[i - 1]) continue
            for(let j = i + 1; j < n - 2; j++){
                if(j > i + 1 && nums[j] === nums[j - 1]) continue
                let L = j + 1;
                let R = n - 1;

                while(L < R){
                    let sum = nums[i] + nums[j] + nums[L] + nums[R]

                    if(sum === target){
                        res.push([nums[i], nums[j], nums[L], nums[R]])
                        L++;
                        R--;

                        while(nums[L] === nums[L - 1]) L++
                        while(nums[R] === nums[R + 1]) R--
                    } else if(sum < target){
                        L++;
                    } else {
                        R--
                    }
                }
            }
        }

        return res;
    }
}
