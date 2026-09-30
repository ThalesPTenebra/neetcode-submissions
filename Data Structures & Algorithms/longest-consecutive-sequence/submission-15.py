class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        largest = 0
        seen = set(nums) # O(n)

        # For each element from the array, we start the
        # counter there and adds 1 and check if this new
        # element exists
        for i in range(len(nums)):
            if nums[i] not in seen:
                continue
            counter = 0
            current = nums[i]
            
            while True:
                if current - 1 not in seen:
                    # Take it as min
                    while True:
                        seen.remove(current + counter)
                        counter += 1
                        if current + counter not in seen:
                            # end of sequence
                            largest = max(counter, largest)
                            break
                    break
                else:
                    current -= 1
                
        return largest
        # If no, compare counter with max and start again