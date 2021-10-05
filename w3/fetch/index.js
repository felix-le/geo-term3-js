// Teach how .filter works
// what are the similarities of .filter with .map?
// what are the differences?

const array1 = [1, 2, 3, 4, 5];

const newArray = array1.filter((x) => x > 3);
console.log('🚀 ~ file: index.js ~ line 4 ~ newArray', newArray);

// const mapArray = array1.map((x) => x > 3);
const mapArray = array1.map((x) => x * 3);
console.log('🚀 ~ file: index.js ~ line 6 ~ mapArray', mapArray);
