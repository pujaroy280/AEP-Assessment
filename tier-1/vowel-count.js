/**
@param {string} str
@returns {number}
*/
module.exports = function(str){
  //Solution goes here
  // Step 1: Define a string that contains all the vowels we want to count
  const vowels = 'aeiou';

  // Step 2: Initialize a counter to keep track of the number of vowels
  let vowelCount = 0;

  // Step 3: Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // Step 4: Get the current character from the string
    let char = str[i];

    // Step 5: Check if the current character is a vowel by checking if it's in the 'vowels' string
    if (vowels.includes(char)) {
      // Step 6: If it's a vowel, increase the vowel counter by 1
      vowelCount++;
    }
  }

  // Step 7: Return the total count of vowels
  return vowelCount;
}
