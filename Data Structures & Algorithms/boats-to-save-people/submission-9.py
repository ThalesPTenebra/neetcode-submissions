class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people.sort()
        L, R = 0, len(people) - 1
        n = 0
        # 1 2 2 3 3
        # 
        while L <= R:
            if people[R] + people[L] > limit:
                R -= 1
            else:
                R -= 1
                L += 1
            n += 1
        return n