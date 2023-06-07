/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a,b) => b-a)
    let res = []
    for(let i of deck){
        if(res.length > 0)  res.unshift(res.pop())
        res.unshift(i)
    }
    return res
};