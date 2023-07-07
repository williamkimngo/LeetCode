class Solution:
    def sampleStats(self, count: List[int]) -> List[float]:
        cnt = sum_= len_ = most= 0
        med0 = med1 =-1
        first = True
        total = sum(count)
        
        for i in range(len(count)):
            
            if count[i]!=0 :

                # res +=[i]*count[i]
                if first:
                    first = False
                    first0 = i
                len_ += count[i]
                sum_ += i*count[i]
                last = i
                
                if most < count[i]:
                    mod, most = i, count[i] 
                
                
                if len_ >= (total+1)//2 and med0 < 0: 
                    med0 = i
                if len_ >= (total+2)//2 and med1 < 0: 
                    med1 = i

        return ([first0, last, sum_/(len_), (med0+med1)/2, mod]) 