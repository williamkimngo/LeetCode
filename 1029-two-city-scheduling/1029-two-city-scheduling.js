/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
let h = costs.length/2;
    let output = 0;

    //sort by difference of each pair and descending order.
    costs.sort((a,b)=>(b[1]-b[0])-(a[1]-a[0]));

    for (let i=0;i<h;i++) {
        output += costs[i][0];
    }

    for (let i=h;i<costs.length;i++) {
        output += costs[i][1];
    }

    return output;
};