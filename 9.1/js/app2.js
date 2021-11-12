// showing how to include lodash in your web project                           /0.5
// demonstrate/code one method you chose; console.log the result     /0.5
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [1, 2, 3, 4, 5];

// Check result arr 1 and arr 2 (different)

console.log('different', _.isEqual(arr1, arr2));
// // Check result arr 1 and arr 3 (same)
console.log('same', _.isEqual(arr1, arr3));
