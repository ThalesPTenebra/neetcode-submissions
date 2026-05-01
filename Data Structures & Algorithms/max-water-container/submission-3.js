class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0

        let l = 0
        let r = heights.length - 1

        while(r > l){
            maxArea = Math.max(maxArea, Math.min(heights[l], heights[r]) * (r - l))

            if(heights[r] > heights[l]){
                l++
            } else{
                r--;
            }
        }

        return maxArea
    }
}
