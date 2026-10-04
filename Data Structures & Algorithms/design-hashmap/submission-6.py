class NodeList:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None

class MyHashMap:

    def __init__(self):
        self.capacity = 10000
        self.table = [NodeList(None, None) for _ in range(self.capacity)]

    def put(self, key: int, value: int) -> None:
        # Parse
        idx = key % self.capacity
        cur = self.table[idx]


        # Look for a already existing key
        while cur.next:
            if cur.next.key == key:
                cur.next.value = value
                return
            cur = cur.next

        # Insert if it does not exist
        cur.next = NodeList(key, value)


    def get(self, key: int) -> int:
        # Parse
        idx = key % self.capacity
        cur = self.table[idx]

        # Look for the value in the list
        while cur.next:
            if cur.next.key == key:
                return cur.next.value
            cur = cur.next

        # Return -1 if not found
        return -1
        

    def remove(self, key: int) -> None:
        idx = key % self.capacity
        cur = self.table[idx]

        # Look for the key
        while cur.next:
            if cur.next.key == key:
                cur.next = cur.next.next
                return
            cur = cur.next
        
        


# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)