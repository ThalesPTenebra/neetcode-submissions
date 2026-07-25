class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // if there is a closed bracked if HAS TO CLOSE a prev open bracked
        const stack = []
        const char = {
            "(": ")",
            "[": "]",
            "{": "}"
        }

        for (const x of s){
            if(x in char){
                stack.push(x)
            } else{
                const top = stack.pop()
                if(char[top] === x){
                    continue
                } else {
                    return false
                }
            }
        }

        if(stack.length === 0) return true
        return false
        // so open brackets push to stack, close pop in the stack
        // if the close do not match to the top of the stack return false
        // if the stack finish empty, return true
    }
}
