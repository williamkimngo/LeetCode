class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        #This declares an array of length len(cost) +1 and initializes it with 0s
        memo = [0] * (len(cost) + 1)
        #Base cases
        memo[0] = 0
        memo[1] = 0

        for i in range(2, len(memo)):
            memo[i] = min(memo[i - 1] + cost[i - 1], memo[i - 2] + cost[i - 2])
        
        # The last element represents the top of the staircase, and thus is what should be returned
        return memo[len(cost)]