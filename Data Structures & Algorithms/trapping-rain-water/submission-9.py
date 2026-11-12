class Solution:
    def trap(self, height: List[int]) -> int:
        if len(height) < 3:
            return 0
        
        L, R = 0, len(height) - 1
        maxL, maxR = height[L], height[R]
        total = 0

        while L < R:
            if maxL <= maxR:
                L += 1
                maxL = max(maxL, height[L])
                total += max(0, min(maxL, maxR) - height[L])
            else:
                R -= 1
                maxR = max(maxR, height[R])
                total += max(0, min(maxL, maxR) - height[R])
        return total