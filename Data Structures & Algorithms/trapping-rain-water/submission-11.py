class Solution:
    def trap(self, height: List[int]) -> int:
        l, r = 0, len(height) - 1
        total = 0
        maxL, maxR = height[l], height[r]
        
        while l < r:
            if maxL < maxR:
                l += 1
                maxL = max(height[l], maxL)
                total += max(0, min(maxL, maxR) - height[l])
            else:
                r -= 1
                maxR = max(height[r], maxR)
                total += max(0, min(maxL, maxR) - height[r])
        return total
                

