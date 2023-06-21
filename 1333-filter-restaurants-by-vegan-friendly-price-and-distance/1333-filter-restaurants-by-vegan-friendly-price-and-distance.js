/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
    const coincidences = restaurants.filter(([id, rating, vegan, price, distance]) => {
        const isfriendly = veganFriendly === 0 || vegan === veganFriendly;

        return isfriendly && price <= maxPrice && distance <= maxDistance;
    });

    coincidences.sort((a, b) => b[1] - a[1] || b[0] - a[0]);
    return coincidences.map(([id]) => id);
};