class MyQueue {
    // RULE 1 -> ONLY PUSH AND POP
    constructor() {
        this.stackPush = []
        this.stackPop = []
    }

    fetch(){
        if(this.stackPop.length === 0){
            const size = this.stackPush.length
            for(let i = 0; i < size; i++){
                this.stackPop.push(this.stackPush.pop())
            }
        }
    }
    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        // Equal to stack - push
        this.stackPush.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
        // need remove the first element - but only have access to last one
        this.fetch()

        return this.stackPop.pop()
    }

    /**
     * @return {number}
     */
    peek() {
        this.fetch()
        return this.stackPop[this.stackPop.length - 1]
    }

    /**
     * @return {boolean}
     */
    empty() {
        return !(this.stackPush.length > 0 || this.stackPop.length > 0)
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
