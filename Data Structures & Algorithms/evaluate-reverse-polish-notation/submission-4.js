class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []

        for(const x of tokens){
            if(x !== "+" && x !== "-" && x !== "*" && x !== "/"){
                stack.push(Number(x))
            } else {
                let result = stack.pop()
                console.log(stack, result)

                const current = stack.pop()
                if(x === "+"){
                    result += current
                } else if(x === "-"){
                    result = current - result
                } else if(x === "*"){
                    result *= current
                } else if(x === "/"){
                    result = Math.trunc(current / result)
                } else {
                    console.log("Here: ", x)
                }
                
                console.log(result)
                stack.push(result)
            }
        }

        return stack[0]
    }
}
