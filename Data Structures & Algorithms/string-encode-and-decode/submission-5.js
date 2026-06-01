class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // Count the number of elements in each string and add in front of them
        let encoded = ""
        for(const str of strs){
            let size = str.length
            encoded += size + '#' + str
        }

        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let ptr = 0;
        const result = []
        while(ptr < str.length){
            let wordSize = ""
            while(str[ptr] !== "#" && ptr < str.length){
                wordSize += String(str[ptr])
                ptr++
            }
            wordSize = Number(wordSize)            
            ptr++

            let word = ""
            for(let i = ptr; i < ptr + wordSize; i++){
                word += str[i]
            }
            result.push(word)
            ptr += wordSize         
        }

        return result
    }
}
