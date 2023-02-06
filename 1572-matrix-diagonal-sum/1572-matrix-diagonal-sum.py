class Solution:
    def diagonalSum(self, mat: List[List[int]]) -> int:
        
        sum = 0
        i = 0
        j = len(mat)-1
    
        for index in mat: 
            sum += index[i]+index[j]
            if i == j:
                sum -= index[j]
            i+=1
            j-=1
    
        return sum