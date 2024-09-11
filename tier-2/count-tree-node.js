/**
 * Definition for TreeNode.
 * 
  *class TreeNode {
  *  constructor(val, left, right){
  *    this.val = (val===undefined ? 0 : val)
  *    this.left = (left===undefined ? null : left)
  *    this.right = (right===undefined ? null : right)
  *  }
  *}
 * 
*/

/**
@param {TreeNode} list
@returns {number}
*/

module.exports = function(list){
  //Solution goes here
  // Step 1: Base case - If the current node is null, return 0 (no nodes to count)
  if (root === null) {
    return 0;
  }

  // Step 2: Recursive case - Count the current node and the nodes in the left and right subtrees
  // Add 1 for the current node, and recursively count the nodes in the left and right subtrees
  return 1 + countNodes(root.left) + countNodes(root.right);
}
