// [19, 12, 1]
// [12, 1] - push
// [19, 1, 12] - pop
// pop - busca na fila do pop se nao achar, puxa do push
// empty -> verifica nas duas pilhas


class MyQueue {
    constructor() {
        this.stackPush = []
        this.stackPop = []
    }

    populateStackPop(){
        if(this.stackPop.length > 0) return

        const stackPushSize = this.stackPush.length
        for(let i = 0; i < stackPushSize; i++){
            let value = this.stackPush.pop()
            this.stackPop.push(value)
        }
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stackPush.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
        this.populateStackPop()
        
        return this.stackPop.pop()
    }

    /**
     * @return {number}
     */
    peek() {
        this.populateStackPop()
        return this.stackPop[this.stackPop.length - 1]
    }

    /**
     * @return {boolean}
     */
    empty() {
        if(this.stackPush.length === 0 && this.stackPop.length === 0) return true
        return false
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
