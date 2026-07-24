class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     * 
     * iterate
     * [-1]
     * é negativo? Significa que pode ter colisão a esquerda, verifica topo
     * não há topo, continue
     * [-1,2]
     * positivo? Continue
     * [-1, 2, -3]
     * verifica topo (2)
     * colide
     * [-1, -3]
     * verifica de novo até topo ser negativo ou não existir
     */
    asteroidCollision(asteroids) {
        const stack = []

        for(const value of asteroids){
            while(true){
                if(stack.length === 0){
                    stack.push(value)
                    break
                }
                if(value < 0) {
                    let top = stack[stack.length - 1]
                    if(top > 0){
                        //colision
                        if(Math.abs(value) > Math.abs(top)){
                            // destruct top
                            stack.pop()
                        } else if(Math.abs(value) === Math.abs(top)) {
                            // both got destructed
                            stack.pop()
                            break;
                        } else {
                            // value got destructed
                            break;
                        }
                    } else {
                        stack.push(value)
                        break;
                    }
                } else {
                    stack.push(value)
                    break;
                }                
            }
        }

        return stack
    }
}
