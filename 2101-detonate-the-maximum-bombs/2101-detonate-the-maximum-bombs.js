/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {

	const neighbours = findNeighbours(bombs);
	let max=0;

	for(let i=0;i<bombs.length;i++){
		const count=findMaxDetonations(i,neighbours)
		/* if the count is bombs.length which means a bomb detonated can have impact on all the bombs present. 
		So that would be max. So just return instead of proceeding to save time.*/
		if(count===bombs.length)return count;
		max=Math.max(max,count)
	}
	return max

	function findNeighbours(b){

		const map = new Map();

		for(let i=0;i<b.length;i++){
			const x1 = b[i][0]
			const y1 = b[i][1]
			const r = b[i][2]
			for(let j=0;j<b.length;j++){
				// i!==j to make sure we are not taking that bomb itself.
				if(i!==j){
					const x2=b[j][0];
					const y2=b[j][1];
					// this is the formula mentioned on first point. But we do r*r instead of r because we are not taking the root.
					// It'll work when used root as well.  Math.sqrt((x1-x2)**2 + (y1-y2)**2) <= r
					if((x1-x2)**2 + (y1-y2)**2 <= r*r){
						if(map.has(i)){
							const arr=map.get(i)
							arr.push(j)
							map.set(i,arr)
						}else{
							map.set(i,[j])    
						}
					}
				}
			}
		}
		// this map has all the neighbours to a particular bomb
		return map
	}

	function findMaxDetonations(start,map){
		const visited = new Set();
		const q = []
		q.push(start);
		visited.add(start)
		while(q.length){
			const len=q.length
				const first=q.shift();
				// Some bombs have no neighbours so make sure to check it before proceeding
				if(map.has(first)){
					for(let b of map.get(first)){
						if(!visited.has(b)){
							visited.add(b)
							q.push(b)
						}
					}    
				}
		}
		// contains the neighbours visited
		return visited.size
	}

};