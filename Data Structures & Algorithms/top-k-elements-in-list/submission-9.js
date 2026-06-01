class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Freq map + order array O(nLogN)
        const map = new Map()
        
        for(const x of nums){
            map.set(x, (map.get(x) || 0) + 1)
        }

        let freqs = Array.from(map)
        freqs.sort((a, b) => b[1] - a[1])
        freqs = freqs.map(pair => pair[0])
        freqs = freqs.slice(0, k)
        console.log(freqs)

        return freqs
    }
}
