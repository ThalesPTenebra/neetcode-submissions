class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        // Vamos construir 2 mapas de frequencia e comparar
        const sMap = {}
        const tMap = {}

        for(let i = 0; i < s.length; i++){
            sMap[s[i]] = (sMap[s[i]] || 0) + 1
            tMap[t[i]] = (tMap[t[i]] || 0) + 1
        }

        for(let key in sMap){
            if(tMap[key] !== sMap[key]) return false
        }

        return true
    }
}
