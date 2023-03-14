class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        res = []
        while matrix:
            res.extend(matrix.pop(0))
            if matrix and matrix[0]:
                res.extend([row.pop() for row in matrix])
            if matrix:
                res.extend(matrix.pop()[::-1])
            if matrix and matrix[0]:
                res.extend([row.pop(0) for row in matrix][::-1])
        return res