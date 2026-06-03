class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(ele => `${ele.length}#${ele}`).join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        let ptr = 0
        while(ptr < str.length){
            let strSize = ""
            while(str[ptr] !== "#"){
                strSize += str[ptr]
                ptr++
            }
            console.log(strSize)
            strSize = parseInt(strSize)
            ptr++
            let word = ""
            const wordLimit = ptr + strSize
            while(ptr < wordLimit){
                word += str[ptr]
                ptr++
            }
            result.push(word)
        }

        return result
    }
}
