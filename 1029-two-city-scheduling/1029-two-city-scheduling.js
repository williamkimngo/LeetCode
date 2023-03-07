/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
let half = costs.length/2;
    let total = 0;

    //sort by difference of each pair and descending order.
    costs.sort((a,b)=>(b[1]-b[0])-(a[1]-a[0]));
    console.log(costs)
    for (let i=0;i<half;i++) {
        total += costs[i][0];
    }

    for (let i=half;i<costs.length;i++) {
        total += costs[i][1];
    }

    return total;
};