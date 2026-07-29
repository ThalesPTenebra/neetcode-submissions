class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const splited = path.split("/")
        const stack = ["/"]
        console.log(splited)
        for(const x of splited){
            console.log(x)
            if(x === "." || x === "") continue
            if(x === ".."){
                if(stack.length > 1){
                    stack.pop()
                    stack.pop()
                }

                continue
            }
            stack.push(x)
            stack.push("/")
        }

        if(stack.length > 1 && stack[stack.length - 1] === "/") stack.pop()

        return stack.join("")
    }
}
