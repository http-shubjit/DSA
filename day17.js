//**Find the missing number in a given integer array of 1 to 100**//
// let arr = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
//   42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
//   61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
//   80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
//   99, 100,
// ];
// let presentarr = [12, 28, 36, 48, 59, 66, 77, 88, 10];
// const findMissingNum = (arr, presentarr) => {
//   let misingarr = [];
//   for (i = 0; i < arr.length; i++) {
//     if (!presentarr.includes(arr[i])) {
//       misingarr.push(arr[i]);
//     }
//   }
//   return misingarr;
// };
// console.log(findMissingNum(arr, presentarr));

//**Find a duplicate number in an array of integers**/

// let arr = [1, 2, 3, 1, 2];

// const findDuplicate = (arr) => {
//   let duplicateNo = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         duplicateNo.push(arr[i]);
//       }
//     }
//   }
//   console.log(duplicateNo);
// };

// console.log(findDuplicate(arr));
