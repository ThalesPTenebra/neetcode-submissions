class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let volume = 0;

        for(let i = 0; i < heights.length - 1; i++){
            for(let j = i + 1; j < heights.length; j++){
                let menor = heights[i] < heights[j] ? heights[i] : heights[j]
                volume = (j - i) * menor
                if(volume > max) {
                    max = volume
                }
            }
        }

        return max;
    }
}
