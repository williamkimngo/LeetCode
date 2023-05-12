class Solution:
    def buildWall(self, height: int, width: int, bricks: List[int]) -> int:
        combos = []
        def get_combos(cur, cur_sum):                     # 1. find all possible bottom row combination (combos)
            nonlocal combos, width
            if cur_sum > width: return
            if cur_sum == width:
                combos.append(tuple(cur))                 # if width matches, add to `combos`
                return
            for brick in bricks:
                get_combos(cur + [brick], cur_sum + brick)
        get_combos([], 0)
        
        d = collections.defaultdict(list)                 # make a adjacency list for {combo: [possible_neighbor_row...]}
        
        for i, combo in enumerate(combos):                # 2. for each `combo`, find its possible neighbor row
            s, cur = set(), 0
            for val in combo[:-1]:                        # use set `s` to store all join location, we don't care the right edge (hence combo[:-1]) 
                s.add(cur:=cur+val)
            for j, nei in enumerate(combos):    
                cur = 0                
                for val in nei[:-1]:
                    cur += val
                    if cur in s: break                    # if `combo` and its neighbor row `nei` join bricks at `cur`, then this neighbor can't be used at upper row
                else:                        
                    d[combo].append(nei)
                    
        ans, mod = 0, int(1e9+7)
        
        @cache
        def dfs(combo, h):                                # count number of ways build brick up to `height` \
            nonlocal ans, d, height                       #   with current row as `combo` at the `h`th row
            if height == h: return 1
            return sum(dfs(nei, h+1) for nei in d[combo])
            
        for combo in combos:                              # 3. for each `combo`, starting from bottom row, build up to `height`
            ans += dfs(combo, 1) % mod                    # count all possible ways and take the sum
            
        return ans % mod   