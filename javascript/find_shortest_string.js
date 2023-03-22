function findShortestString(arr) {
  //cycle through each array
  //compare each strings' length
  //return smallest

  let smallest = arr[0]

    for(const value of arr ){
      for(secValue of arr){
        if(value.length < secValue.length && value.length < smallest.length){
          smallest = value
        }
      }
    }
    
  return smallest
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
