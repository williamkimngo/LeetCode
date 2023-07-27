class Solution:
    def maximumWhiteTiles(self, tiles: List[List[int]], carpetLen: int) -> int:
        tiles.sort()
        maxCover = 0
        starts, ends = zip(*tiles)
        dp = [0]*(len(tiles) + 1) # dp: total covered lengths from 0
        for i in range(len(tiles)):
            dp[i+1] = dp[i] + ends[i] - starts[i] + 1 # length of each tile is end - start + 1
        for l in range(len(tiles)):
            e = starts[l] + carpetLen
            r = bisect_right(starts, e)
            cover = dp[r] - dp[l] - max(0, ends[r-1] - e + 1) # total cover on the right MINUS total cover on the left MINUS offset
            maxCover = max(maxCover, cover)
        return maxCover 
        