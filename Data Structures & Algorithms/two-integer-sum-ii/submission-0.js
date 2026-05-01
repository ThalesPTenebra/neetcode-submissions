class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // [1,2,3,4]
        //    i j

        let L = 0;
        let R = numbers.length - 1;

        while(L < R){
            let currentSum = numbers[L] + numbers[R]
            if(currentSum === target){
                break;
            } else if(currentSum > target){
                R--;
            } else {
                L++;
            }
        }

        return [L + 1, R + 1]
    }
}
