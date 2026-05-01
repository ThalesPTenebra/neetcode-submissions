class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // L, R
        // get min(L, R) * distance
        // Choose to move the minor between the L R

        let max = 0;
        let L = 0;
        let R = heights.length - 1;

        while(L < R){
            let currentWater = Math.min(heights[L], heights[R]) * (R - L);
            max = Math.max(currentWater, max)

            if(heights[L] > heights[R]){
                R--;
            } else {
                L++;
            }
        }

        return max;
    }
}
