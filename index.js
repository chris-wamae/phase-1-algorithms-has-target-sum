
function hasTargetSum(array, target) {
  // iterate over the array of numbers
  for (let i = 0; i < array.length; i++) {
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    const complement = target - array[i];
    // iterate over the remaining numbers in the array
    for (let j = i + 1; j < array.length; j++) {
      // check if any of the remaining numbers is the complement
      // if so, return true
      if (array[j] === complement) return true;
    }
  }
  // if we reach the end of the array, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Big 0 time complexity = O(n)
*/

/* 
  Add your pseudocode here

/*  // iterate over the array of numbers
  //   for the current number, identify a complementary number that adds to our target
  //   (for example: if our number is 2, and the target is 5, the complementary number is 3)
  //   iterate over the remaining numbers in the array
  //     check if any of the remaining numbers is the complement
  //       if so, return true
  // if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
  function that  takes in an array of numbers and
// a second number as its two parameters
it returns true if the sum of any two numbers
in the array is equal to the number passed
as the second parameters
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

//takes in an array as the first parameter
//a number as the second
//adds the first array element to all other
//array elements except itself
//does the same thing to all other numbers
//returns true if any summation is equal to the target

  //for loop that loops through the array
  //if statement that removes the array element being added to
  //others from the second array

// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   let finalAnwser = []
//   const arrays = [];
//   const arrayOfResults = [];

//   for (number of array) {

//     arrays.push([...array]);

//     for (let i = 0;i <= arrays.length;i++) {

//       //console.log(singleArray);

//       arrays.map(function (element) {

//         //console.log(element);

//         for (mainArrayElement of array) {

//           //console.log(`i am x ${mainArrayElement}`);

//          // console.log(`i am element + ${element} + ${mainArrayElement}`);

//           if (mainArrayElement * 2 === element + mainArrayElement) {

//             console.log(`I have skipped adding ${mainArrayElement} to ${element}`);

//           } else {
//             //console.log(`${element} has been added to ${mainArrayElement}`)
//             let summation = element + mainArrayElement
//             console.log(`I am the value of the variable ${summation}`)
//             arrayOfResults.push(summation);
//           }
          
//         }
//       });
//     }
//   }
// function ans(){
//   for(digits of arrayOfResults){
//     if(digits === target){
//       return true
//     }
//     else{return false}
//   }
// }

// console.log(`This is the final array: ${finalAnwser}`)
// console.log(`I am the array of results ${arrayOfResults}`)
// return ans()
// }
// hasTargetSum([1,2,5], 4);

// for(i=0;i <= arrayOfResults.length;i++){
//   if(arrayOfResults[i] === target){
//     console.log("True")
//     console.log(`This is the ${arrayOfResults}`)
    
//     return true
//   }
//   else{
//     console.log("False")
//     console.log(`This is the ${arrayOfResults}`)
//     return false

//   }
// }