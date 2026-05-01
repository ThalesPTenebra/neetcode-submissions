class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
        const map = new Map()
        for(const word of strs){
            const sortedWord = Array.from(word).sort().join()
            if(!map.has(sortedWord)){
                map.set(sortedWord, [])
            }
            map.get(sortedWord).push(word)
        }

        const result = []
        for(const [_, value] of map.entries()){
            result.push(value)
        }

        return result
    }
}
