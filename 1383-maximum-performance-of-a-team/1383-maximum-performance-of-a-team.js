/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speed, efficiency, k) {
    const MOD =  BigInt(10**9 + 7);

	const engineers = speed.map((s, i) => [efficiency[i], s]);
	engineers.sort((a, b) => b[0] - a[0]); // Descending order of efficiency

	const pq = new MinPriorityQueue({ compare: (a, b) => a - b });
	let result = BigInt(0), speedSum = 0;

	for (const [eff, speed] of engineers) {
		if (pq.size() === k) 
			speedSum -= pq.dequeue(); // Remove the one with min speed

		pq.enqueue(speed);
		speedSum += speed;
        
		const currResult = BigInt(speedSum) * BigInt(eff);
        if (currResult > result)
		    result = currResult;
	}

	return result % MOD;
};