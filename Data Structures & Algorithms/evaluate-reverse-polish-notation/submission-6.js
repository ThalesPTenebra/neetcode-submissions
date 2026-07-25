class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        // loop throuth tokens
        for(const token of tokens){
            if(token === "+" || token === "-" || token === "*" || token === "/"){
                const first = stack.pop()
                const second = stack.pop()

                if(token === "+"){
                    stack.push(first + second)
                } else if(token === "-"){
                    stack.push(second - first)
                } else if(token === "*"){
                    stack.push(first * second)
                } else {
                    stack.push(Math.trunc(second / first))
                }
            } else {
                stack.push(Number(token))
            }
        }

        console.log(stack)
        return stack[0]
        // if operator pop two last from stack
        // if number push to stack
        // truncates the division
    }
}
