class MyStack {
    constructor() {
        this.queue = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue = [x, ...this.queue]
    }

    /**
     * @return {number}
     */
    pop() {
        const poped = this.queue[0]

        for(let i = 1; i < this.queue.length; i++){
            this.queue[i - 1] = this.queue[i]
        }
        this.queue.pop()

        return poped
    }

    /**
     * @return {number}
     */
    top() {
        return this.queue[0]
    }

    /**
     * @return {boolean}
     */
    empty() {
        return !!(this.queue.length === 0) 
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
