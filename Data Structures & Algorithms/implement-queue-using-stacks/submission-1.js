class MyQueue {
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stack1.push(x)
    }


    /**
     * @return {number}
     */
    pop() {
        const size = this.stack1.length
        for(let i = 1; i < size; i++){
            this.stack2.push(this.stack1.pop())
        }

        const toRemove = this.stack1.pop()
        for(let i = 0; i < this.stack2.length; i++){
            this.stack1.push(this.stack2.pop())
        }
        return toRemove
    }

    /**
     * @return {number}
     */
    peek() {
        const size = this.stack1.length
        for(let i = 0; i < size; i++){
            this.stack2.push(this.stack1.pop())
        }

        const toReturn = this.stack2[this.stack2.length - 1]
        console.log(this.stack2, this.stack1)
        for(let i = 0; i < this.stack2.length; i++){
            this.stack1.push(this.stack2.pop())
        }
        return toReturn
    }

    /**
     * @return {boolean}
     */
    empty() {
        return !!(this.stack1.length === 0)
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
