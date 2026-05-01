class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

        createFreqMap(s) {
        const map = new Map();
        for (const x of s) {
            map.set(x, !!map.get(x) ? map.get(x) + 1 : 1);
        }

        return map;
        }
    isAnagram(s, t) {
        const mapS = this.createFreqMap(s);
        const mapT = this.createFreqMap(t);

        if (mapS.size !== mapT.size) return false;

        for (const [key, value] of mapS.entries()) {
            if (mapT.get(key) !== value) return false;
        }

        return true;
    }
}
