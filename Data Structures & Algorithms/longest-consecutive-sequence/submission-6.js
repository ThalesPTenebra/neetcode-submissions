class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let counter = 1;
        let max = 1;
        const sorted = Array.from(new Set(nums.sort((a, b) => a - b)))
        console.log(sorted)
        if(sorted.length <= 1) return sorted.length;

        for(let i = 1; i < sorted.length; i++){
            if(sorted[i - 1] + 1 === sorted[i]){
                counter += 1;
                if(counter > max) {
                    max = counter
                }
            } else {
                counter = 1;
            }
        }

        return max;
    }
}
