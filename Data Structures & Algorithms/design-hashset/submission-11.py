class NodeList:
    def __init__(self, key):
        self.key = key
        self.next = None

class MyHashSet:

    def __init__(self):
        self.capacity = 10000
        self.S = [NodeList(None) for _ in range(self.capacity)]

    def add(self, key: int) -> None:
        idx = key % self.capacity
        cur = self.S[idx]

        while cur.next:
            if cur.next.key == key:
                return
            cur = cur.next
        cur.next = NodeList(key)
        

    def remove(self, key: int) -> None:
        idx = key % self.capacity
        cur = self.S[idx]

        while cur.next:
            if cur.next.key == key:
                cur.next = cur.next.next
                return
            cur = cur.next

    def contains(self, key: int) -> bool:
        idx = key % self.capacity
        cur = self.S[idx]

        while cur.next:
            if cur.next.key == key:
                return True
            cur = cur.next
        return False


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)