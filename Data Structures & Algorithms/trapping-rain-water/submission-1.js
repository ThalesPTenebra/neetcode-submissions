class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length

        if(n <= 2) return 0
        // loop
        // where Im look left for the highest
        // look right for the higuest
        // once I find, get the min
        // this is potencial watter
        // potencial watter - height from where I am = watter on Ith
        // look for optimizations after

        let totalWatter = 0;
        for(let i = 1; i < n - 1; i++){
            let maxLeft = Math.max(...height.slice(0, i))
            let maxRight = Math.max(...height.slice(i + 1, n))
            let potentialWatter = Math.min(maxLeft, maxRight)

            console.log(potentialWatter)
            if(potentialWatter === 0) continue

            let blockWatter = potentialWatter - height[i]
            totalWatter += blockWatter >= 0 ? blockWatter : 0;
        }

        return totalWatter
    }
}
