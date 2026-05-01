class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((str) => `${str.length}#${str}`).join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */

    getWord(str){
        // get chars till first #
        // transform these chars into int (x)
        // get x chars after #
        // return these chars after # and the rest of the #

        let ptr = 0;
        let strLength = "";

        while(true){
            if(str[ptr] !== "#"){
                strLength += str[ptr];
            } else {
                break;
            }
            ptr++;
        }

        strLength = parseInt(strLength)
        return [str.slice(ptr + 1, ptr + 1 + strLength), str.slice(ptr + 1 + strLength, str.length)]
    }

    decode(str) {
        const words = []

        let currentString = str;
        while(currentString.length > 0){
            let [currentWord, updatedString] = this.getWord(currentString)
            words.push(currentWord)
            currentString = updatedString;
            console.log(currentWord)
        }    

        return words
    }
}
