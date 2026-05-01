class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        // Create a setMap to check if the next number is present
        const set = new Set([...nums])

        // Create a var (1) and start count, the first time the number is not present
        // that it is
        let counter = 1;
        while(true){
            if(!set.has(counter)){
                return counter
            }
            counter++;
        }
    }
}
