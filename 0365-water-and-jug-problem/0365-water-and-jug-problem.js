/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function(jug1Capacity, jug2Capacity, targetCapacity) {
    const getSetKey = (first,second) => `${first},${second}`;
    const visited = new Set([getSetKey(0, 0)]);
    let queue = [[0, 0]];
    
    while (queue.length > 0) {
        let next = [];
        
        for (const [firstJug, secondJug] of queue) {
            if ([firstJug, secondJug, firstJug + secondJug].includes(targetCapacity)) {
                return true;
            }
            
            // fill first
            if (firstJug !== jug1Capacity && !visited.has(getSetKey(jug1Capacity, secondJug))) {
                next.push([jug1Capacity, secondJug]);
                visited.add(getSetKey(jug1Capacity, secondJug));
            }
            
            // fill second
            if (secondJug !== jug2Capacity && !visited.has(getSetKey(firstJug, jug2Capacity))) {
                next.push([firstJug, jug2Capacity]);
                visited.add(getSetKey(firstJug, jug2Capacity));
            }
            
            // empty first
            if (firstJug !== 0 && !visited.has(getSetKey(0, secondJug))) {
                next.push([0, secondJug]);
                visited.add(getSetKey(0, secondJug));
            }
            
            // empty second
            if (secondJug !== 0 && !visited.has(getSetKey(firstJug, 0))) {
                next.push([firstJug, 0]);
                visited.add(getSetKey(firstJug, 0));
            }
            
            // pour from first to second
            if (firstJug !== 0 && secondJug !== jug2Capacity) {
                const availableSecondJug = jug2Capacity - secondJug;
                const firstJugLastWater = availableSecondJug >= firstJug ? 0 : firstJug - availableSecondJug;
                const secondJugWater = availableSecondJug >= firstJug ? secondJug + firstJug : jug2Capacity;
                
                if (!visited.has(getSetKey(firstJugLastWater, secondJugWater))) {
                    next.push([firstJugLastWater, secondJugWater]);
                    visited.add(getSetKey(firstJugLastWater, secondJugWater));
                }
            }
            
            // pour from second to first
            if (secondJug !== 0 && firstJug !== jug1Capacity) {
                const availableFirstJug = jug1Capacity - firstJug;
                const secondJugLastWater = availableFirstJug >= secondJug ? 0 : secondJug - availableFirstJug;
                const firstJugWater = availableFirstJug >= secondJug ? secondJug + firstJug : jug1Capacity;
                
                if (!visited.has(getSetKey(firstJugWater, secondJugLastWater))) {
                    next.push([firstJugWater, secondJugLastWater]);
                    visited.add(getSetKey(firstJugWater, secondJugLastWater));
                }
            }
        }
        
        queue = next;
    }
    
    return false;
};