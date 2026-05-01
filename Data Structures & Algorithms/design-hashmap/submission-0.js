class CustomNode {
    constructor(key, value, next){
        this.key = key
        this.value = value
        this.next = next
    }
}

class MyHashMap {
    map = new Array(10000)

    constructor() {}

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const idx = key % 10000

        if(!this.map[idx]){
            this.map[idx] = new CustomNode(key, value, null)
            return
        }

        // tratar colisao
        let ptr = this.map[idx]
        if(ptr.key === key){
            ptr.value = value
            return
        }

        while(ptr.next){
            ptr = ptr.next
            if(ptr.key === key){
                ptr.value = value
                return
            }
        }

        ptr.next = new CustomNode(key, value, null)
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const idx = key % 10000
        if(!this.map[idx] % 10000){
            return -1;
        }

        let ptr = this.map[idx]
        while(ptr){
            if(ptr.key === key){
                return ptr.value;
            }
            ptr = ptr.next
        }

        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const idx = key % 10000

        if(!this.map[idx]) return

        let ptr = this.map[idx];
        if(ptr.key === key) {
            this.map[idx] = ptr.next;
        }

        while(ptr.next){
            if(ptr.next.key === key){
                ptr.next = ptr.next.next
                return
            }
        }

        return
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
