let num1 = 100;
let num2 = 20;
let num3 = 12;
let num4 = 235;
let num5 = 8;

let largest;

if (num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5) {
  largest = num1;
} else if (num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5) {
  largest = num2;
} else if (num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5) {
  largest = num3;
} else if (num4 >= num1 && num4 >= num2 && num4 >= num3 && num4 >= num5) {
  largest = num4;
} else {
  largest = num5;
}

console.log("The largest number is: " + largest);






// Displaying the array without duplicates
// const array = [1, 2, 3, 4, 2, 1, 5, 6, 1, 4, 7, 8, 8, 7];
// const uniqueArray = Array.from(new Set(array));
// console.log('Array without duplicates:', uniqueArray);





// To return an array of unique elements from the the given two arrays
// function getUniqueElements(arr1, arr2) {
  
//     const combinedArray = arr1.concat(arr2);
//     const uniqueSet = new Set(combinedArray);
//     const uniqueArray = Array.from(uniqueSet);
//     return uniqueArray;
//   }
  
  
//   const array1 = [13, 2, 10, 14, 5];
//   const array2 = [3, 14, 5, 10, 7];
//   const uniqueElements = getUniqueElements(array1, array2);
  
//   console.log('Unique elements:', uniqueElements);
  