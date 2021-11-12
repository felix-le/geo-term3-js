// Write a function that returns an object, whose properties are pets
// and whose values are the inventory count of each pet.
// For example, using the const data, function should return:
// {
//  dog: 2,
//  cat: 1,
//  hamster: 1
// }

const data = [
  {
    firstName: 'Barky',
    pet: 'dog',
  },
  {
    firstName: 'Donut',
    pet: 'dog',
  },
  {
    firstName: 'Spot',
    pet: 'cat',
  },
  {
    firstName: 'Hammy',
    pet: 'hamster',
  },
];

function groupPeopleByPets(people) {
  return people.reduce((acc, cur) => {
    if (!acc?.[cur.pet]) {
      acc[cur.pet] = 0;
    }
    acc[cur.pet] += 1;
    return acc;
  }, {});
}

console.log(groupPeopleByPets(data));
