// 1. Teach map's 2nd parameter -- index (max 1 minute):
// The index is used inside map() method to state the position of each element in an array, but it doesn’t change the original array.
const student = ['Arun', 'Arul', 'Sujithra', 'Jenifer', 'Wilson'];

student.map((stud, index) => {
  console.log('Hello... ' + stud + '\n');

  var index = index + 1;

  console.log('Your Position in Top 5' + ' Rank is ' + index + '\n');
});

//https://www.loom.com/share/799f3c2d622a43dea7efbceeb7ed439f
