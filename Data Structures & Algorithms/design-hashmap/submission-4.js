class Node {
    constructor(key, value, next){
        this.key = key
        this.value = value
        this.next = next
    }
}

class MyHashMap {
    constructor() {
        this.limit = 10000
        this.list = new Array(this.limit)
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const hash = key  % this.limit
        
        if(!this.list[hash]){
            this.list[hash] = new Node(key, value, null)
            return
        }



        let ptr = this.list[hash]
        if(ptr.key === key){
            ptr.value = value
            return
        }

        while(ptr.next !== null) {
            if(key === ptr.next.key){
                ptr.next.value = value
                return
            }

            ptr = ptr.next
        }

        ptr.next = new Node(key, value, null)
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const hash = key % this.limit

        if(!this.list[hash]) return -1

        let ptr = this.list[hash]
        while(ptr !== null){
            if(ptr.key === key) return ptr.value

            ptr = ptr.next
        }

        return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const hash = key % this.limit

        if(!this.list[hash]) return

        let ptr = this.list[hash]

        if(ptr.key === key){
            this.list[hash] = ptr.next
        }

        while(ptr.next !== null){
            if(ptr.next.key === key) {
                ptr.next = ptr.next.next
            } 

            ptr = ptr.next
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
