/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let output = 0;  //initialising the reverse value as 0 at beginning
    while(x!=0){ // to stop the while loop once we have completed the reversal
        output = (output * 10) + (x % 10); // maths formula to insert the digit to the number (like in the equation 2 (see the approach section of this solution))
        x = (x - (x % 10))/10; // maths formula to delete the last digit using equation 1 (see the approach section of this solution)
    }
    if(output <= -2147483651 || output >= 2147483651){  // checking whether the result is in the range as mentioned in the question)
        return 0;
    }
    return output; // returning the result
};

// we are actually going to make the number work like a string without converting it to a string using mathematical equations.

// things to keep in mind:

// To find the last digit of a number, do as below:
// number % 10

// example:
// 123 % 10 = 3,
// 28 % 10 = 8

// To insert a digit to the number, do as below:
// (number * 10) + digit

// example:
// suppose we need insert digit 4 into the number 123,
// (123 * 10) + 4 = 1234

// By just using these two simple mathematical equations, we can do reverse the integer.

// Complexity
// Time complexity:
// O(n)

// Space complexity:
// O(1)