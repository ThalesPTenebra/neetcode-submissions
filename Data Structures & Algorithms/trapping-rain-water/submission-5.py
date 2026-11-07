class Solution:
    def trap(self, height: List[int]) -> int:
        L, R = 0, len(height) - 1
        total = 0
        maxL, maxR = 0, 0

        while L < R:
            if height[L] > maxL:
                maxL = height[L]
            if height[R] > maxR:
                maxR = height[R]
            
            total += max(min(maxL, maxR) - height[L], 0)
            total += max(min(maxL, maxR) - height[R], 0)

            if height[L] <= height[R]:
                L += 1
            else:
                R -= 1

        return total