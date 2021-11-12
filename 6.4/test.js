const arr = [1, 2, 3, 4, 5];
console.log('arr', typeof arr);

const stringified = JSON.stringify(arr);
console.log('stringified', typeof stringified);

const parsed = JSON.parse(stringified);
console.log('parsed', parsed);
