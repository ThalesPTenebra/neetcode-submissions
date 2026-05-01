class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let counter = 1;

        const set = new Set()

        for(let i = 0; i < nums.length; i++){
            set.add(nums[i])
        }

        while(true){
            if(set.has(counter)){
                counter++
            } else {
                break
            }
        }

        return counter;
    }
}
