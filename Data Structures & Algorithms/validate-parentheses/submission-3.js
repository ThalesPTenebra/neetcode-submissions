class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // We have a stack
        const stack = []
        // grupo dos open ({[
        // grupo dos closed )]}
        // Se abrirmos, tem que fechar, se fechado, tem que ter um aberto referencia

        const char = {
            "}": "{",
            "]": "[",
            ")": "("
        }

        for(const x of s){
            if(!(x in char)){
                stack.push(x)
            } else{
                const lastChar = stack.pop()
                if(lastChar !== char[x]) return false
            }
        }

        if(stack.length > 0) return false

        return true

    }
}
