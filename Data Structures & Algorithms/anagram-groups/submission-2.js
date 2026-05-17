class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // If I sort I can find the Anagrams

        // I can sort every element and transform then in idx of a map
        const map = new Map()

        // If element sorted exists as idx, insert as a value on the list, if not, inser idx and the value
        for(let i = 0; i < strs.length; i++){
            let sortedStr = Array.from(strs[i]).sort().join("")

            if(map.has(sortedStr)){
                map.get(sortedStr).push(strs[i])
            } else {
                map.set(sortedStr, [strs[i]])
            }
        }

        return [...Array.from(map.values())]
    }
}
