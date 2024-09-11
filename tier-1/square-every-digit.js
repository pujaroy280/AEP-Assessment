/**
@param {number} num
@returns {number}
*/
module.exports = function(num){
  //Solution goes here
  
  // Convert the number to a string
  // Square each digit
  // Convert the result back to a number

  // Step 1: Convert the number to a string so that digits can be accessible
  let numStr = num.toString();

  // Step 2: Split the string into individual digits, map over each digit to make sure it is passed.
  let sqrDig = numStr.split('').map(digit => {
    // Step 3: For each digit, square it and return it as a string
    return (digit * digit).toString();
  });

  // Step 4: Join the squared digits back together in quotes.
  let resultStr = sqrDig.join('');

  // Step 5: Convert the final string back to a number and return the function by it's declared name.
  return Number(resultStr);
}

