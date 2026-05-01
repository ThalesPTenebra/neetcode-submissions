class Solution {
    DELIMITER = "#"
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(word => `${word.length}#${word}`).join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedStrings = []
        let currentIndex = 0;

        while(currentIndex < str.length){
            let wordLengthStr = "";

            while(str[currentIndex] !== this.DELIMITER){
                wordLengthStr += str[currentIndex];
                currentIndex++
            }

            let wordLength = parseInt(wordLengthStr)
            let word = str.slice(currentIndex + 1, currentIndex + wordLength + 1)
            decodedStrings.push(word)
            currentIndex += wordLength + 1;
        }

        return decodedStrings
    }
}
