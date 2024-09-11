/**
@param {number} num
@returns {number}
*/

module.exports = function(num){
  //Solution goes here
  // Step 1: Convert the number to binary using toString(2)
  let binaryString = num.toString(2);  // The binary representation of the number

  // Step 2: Initialize a counter to keep track of the number of 1's
  let count = 0;

  // Step 3: Loop through each character in the binary string
  for (let i = 0; i < binaryString.length; i++) {
    // Step 4: Check if the current character is '1'
    if (binaryString[i] === '1') {
      // Step 5: If it's '1', increase the count
      count++;
    }
  }

  // Step 6: Return the total count of 1's
  return count;
}
