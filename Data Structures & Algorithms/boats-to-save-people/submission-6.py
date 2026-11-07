class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        bucket = [0] * (limit + 1)
        for n in people:
            bucket[n] += 1
        
        count = 0
        for i in range(len(bucket)):
            for j in range(bucket[i]):
                people[count] = i
                count += 1

        l, r = 0, len(people) - 1
        res = 0
        while l <= r:
            if people[l] + people[r] > limit:
                r -= 1
            else:
                r -= 1
                l += 1
            res += 1
        return res