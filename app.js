// export const originalArray = (arr) => {
//   return arr;
// };
// // return array with double values in array
// doubleArray(numberArray); // => [2,4,6,8];  hint use map
// export const doubleArray = (arr) => {
//   let doubledArr = arr.map((number) => {
//     return number * 2;
//   });
//   return doubledArr;
// };

// // return array with all even numbers
// evensOnlyArray(numberArray); // => [2,4];  hint use filter
// export const evensOnlyArray = (arr) => {
//   let evensArray = arr.filter((number) => {  
//     return number % 2 == 0;
//   });
//   return evensArray;
// };

// // return array with sum of numbers
// arraySum(numberArray); // => 10;  hint use reduce
  // export const arraySum = (arr) => {
  //   let arrSum = arr.reduce((number, total) => {      
  //     return number + total;
  //   });
  //   return arrSum;
  // };

// return true if every item greater than 0
// allNumbersGreaterThanZero(numberArray); // => true; use every
  // export const allNumbersGreaterThanZero = (arr) => {
  //   let greaterThan = arr.every((number) => {                       ---------not done---------
  //     return number > 0;
  //   });
  //   return greaterThan;
  // };

// // sort array desc order
// sortArray(numberArray); //=> [4,3,2,1] *desc*

// export const sortArray = (arr) => {
//   let sort = arr.reverse((number)=> {
//     return number;
//   });
//   return sort;
// };

// // return true if one or more items in array are odd
// someNumbersAreOdd(numberArray); // => true; use some

// export const someNumbersAreOdd = (arr) => {
//   let areOdd = arr.some((number)=> {
//     return number % 2 === 0;           --not done--
//   });
//   return areOdd;
// };

// EXPORT ALL AS FUNCTIONS AND KEEP THE NAMES THE SAME
// ways to export
// export const methodName = (param) => {
// }
// ----or---------
// export methodName function(param){
// }
// ARRAY ITERATOR METHODS
// numberArray = [1, 2, 3, 4];



// // return array double and even
// evensOnlyAndDoubleArray(numberArray); // => [4,8]; // use map and filter

// // find an item method return 'not found' if not found
// findItem(numberArray, 1); //=> 1



// // -----BONUS------
// // ARRAY ITERATOR METHODS ON Objects with name age
// artists = [
//   { name: "a", likes: 100 },
//   { name: "c", likes: 99 },
//   { name: "c", likes: 101 },
// ];
// // doubles likes of artist
// doubleLikes(artists);
// // => [
// //   {name: 'a', likes:200},
// //   {name: 'c', likes:198},
// //   {name: 'c', likes:202},
// // ];
// moreThan100Likes(artists); // =>[ {name: 'c', likes:101} ]; // use filter
// //  return an array of strings of artist name
// justArtistMoreThan100Likes(artists); //=> ['c']; // use filter
// // get total number of likes fo all artists
// numberOfLikes(artists); //=> 300; // get all likes
// // find an item method. Returns 'not found' if not found
// findObjByName(artists, "a"); // => {name: 'a', likes:200}
// // returns array of artist sorted by likes
// sortArtistByName(artists);