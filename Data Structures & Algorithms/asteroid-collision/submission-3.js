class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        // Take first
        // if negative, colision
        // if positive, push on stack
        // next -> if negative
        // colision
        // if positive, stack
        // colision
        // loop through the stack
        // if destructed -> break
        // if pop the stack, continue

        const stack = []
        const result = []

        for(const x of asteroids){
            if(x > 0){
                stack.push(x)
            } else {
                if(stack.length === 0){
                    result.push(x)
                } else {
                    result.push(x)
                    const size = stack.length
                    for(let i = size - 1; i >= 0; i--){
                        if(Math.abs(x) > stack[i]){
                            stack.pop()
                        } else if(Math.abs(x) === stack[i]){
                            stack.pop()
                            result.pop()
                            break
                        } else {
                            result.pop()
                            break
                        }
                    }
                }
            }
        }

        // stack on result
        for(const y of stack){
            result.push(y)
        }

        return result
    }
}
