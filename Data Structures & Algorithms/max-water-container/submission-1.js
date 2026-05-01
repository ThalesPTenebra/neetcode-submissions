class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let i = 0;
        let j = heights.length - 1
 
        while (i < j){
            max = Math.max(max, (j - i) * Math.min(heights[i], heights[j]))

            if(heights[i] < heights[j]){
                i++
            } else {
                j--;
            }
        }

        return max;
    }
}
