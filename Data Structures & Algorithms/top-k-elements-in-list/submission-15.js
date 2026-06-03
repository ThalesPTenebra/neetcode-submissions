class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // o(n)
        const map = new Map()
        for(const x of nums){
            map.set(x, (map.get(x) || 0) + 1)
        }

        const bucket = Array.from({length: nums.length + 1}, () => [])
        
        for(const [key, value] of Array.from(map)){
            bucket[value].push(key)
        }

        const result = []
        for(let i = bucket.length - 1; i > 0; i--){
            if(bucket[i].length){
                result.push(...bucket[i])
            }
            if(result.length === k) break
        }

        return result
    }
}
