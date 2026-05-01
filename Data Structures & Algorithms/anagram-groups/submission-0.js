class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const word of strs) {
            const sortedWrd = word.split('').sort().join();

            if(!map.has(sortedWrd)){
                map.set(sortedWrd, []);
            }

            map.get(sortedWrd).push(word);
        }

        return Array.from(map.values())
    }
}
