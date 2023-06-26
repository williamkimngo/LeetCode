class StockPrice:

    def __init__(self):
        self.mp = {}
        self.maxp = [] # max-heap 
        self.minp = [] # min-heap 
        self.latest = 0 # latest timestamp

    def update(self, timestamp: int, price: int) -> None:
        self.mp[timestamp] = price 
        if self.latest <= timestamp: self.latest = timestamp
        heappush(self.maxp, (-price, timestamp))
        heappush(self.minp, (price, timestamp))

    def current(self) -> int:
        return self.mp[self.latest]

    def maximum(self) -> int:
        while self.mp[self.maxp[0][1]] != -self.maxp[0][0]: heappop(self.maxp)
        return -self.maxp[0][0]

    def minimum(self) -> int:
        while self.mp[self.minp[0][1]] != self.minp[0][0]: heappop(self.minp)
        return self.minp[0][0]
        


# Your StockPrice object will be instantiated and called as such:
# obj = StockPrice()
# obj.update(timestamp,price)
# param_2 = obj.current()
# param_3 = obj.maximum()
# param_4 = obj.minimum()