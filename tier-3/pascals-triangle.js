/**
@param {number} row
@returns {Array<Array<number>>}
*/

module.exports = function(row){
  //Solution goes here
  // Step 1: Initialize an empty array to hold the rows of Pascal's Triangle
  let triangle = [];
  
  // Step 2: Build each row of the triangle
  for (let i = 0; i < numRows; i++) {
    // Step 3: Create a new row with 'i + 1' elements, all initialized to 1
    let row = Array(i + 1).fill(1);
    
    // Step 4: Update the elements in the row based on the values from the previous row
    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
    
    // Step 5: Add the newly created row to the triangle
    triangle.push(row);
  }
  
  // Step 6: Return the complete Pascal's Triangle
  return triangle;
}
