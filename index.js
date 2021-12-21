function hasTargetSum(array, target) {
  for (i = 0; i< array.length; i++){
    for (j = i + 1; j < array.length; j++){
      if (array[i] + array[j] === target){
        return true
      }
    }
  }
  return false
}

/* 
  o(n^2)
*/

/* 
  for loop interating through the array at index
  nested for loop interating through the array at index + 1
    if array[index] + array[index + 1] === target
      return true
  
  
  return false outside of for loop
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
