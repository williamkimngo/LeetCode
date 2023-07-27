class Solution:
    def minimumSwap(self, s1, s2):
        ans, sequences, visited = 0, set(), set()
        for c1, c2 in zip(s1, s2):
            if c1 != c2:
                if (c1, c2) in sequences:
                    sequences.remove((c1, c2))
                    ans += 1
                else: sequences.add((c1, c2))
        for seq in sequences:
            if (seq[1], seq[0]) not in sequences: return -1
            if (seq[1], seq[0]) not in visited:
                ans += 2
                visited.add(seq)
        return ans