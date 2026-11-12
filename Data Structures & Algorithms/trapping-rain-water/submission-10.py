class Solution:
    def trap(self, height: List[int]) -> int:
        if len(height) < 3:
            return 0
        
        L, R = 0, len(height) - 1
        maxL, maxR = 0, 0
        total = 0

        while L < R:
            maxL = max(maxL, height[L])
            maxR = max(maxR, height[R])

            if height[L] <= height[R]:
                total += max(0, min(maxL, maxR) - height[L])
                L += 1
            else:
                total += max(0, min(maxL, maxR) - height[R])
                R -= 1
        return total