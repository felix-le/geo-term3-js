// Teach how arrow functions work (max 2 minutes):
// syntax: arrow
// when to use/not use return / curly braces
// when to use/not use parenthesis

let a = 3,
  b = 4,
  c = 5,
  d = 6;

function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4));

const sum2 = (a, b) => a + b;
console.log('🚀 ~ file: arrowfn.js ~ line 18 ~ sum2', sum2(3, 4));

const sum3 = (a, b) => {
  const f = a + b;
  return f;
};
console.log('🚀 ~ 3', sum3(3, 4));
const sum4 = (a) => a + a;
console.log('🚀 ~ file: arrowfn.js ~ line 26 ~ sum4', sum4(4));

//https://www.loom.com/share/ee88a03c0eb44235a29295278a663f93
