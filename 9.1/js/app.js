const data = [
  {
    firstName: 'Wyatt',
    lastName: 'Larson',
    age: 59,
    pet: 'dog',
  },
  {
    firstName: 'Davin',
    lastName: 'Heaney',
    age: 29,
    pet: 'cat',
  },
  {
    firstName: 'Diana',
    lastName: 'MacGyver',
    age: 16,
    pet: 'dog',
  },
  {
    firstName: 'Raphael',
    lastName: 'Yost',
    age: 60,
    pet: 'cat',
  },
  {
    firstName: 'Joannie',
    lastName: 'Gerlach',
    age: 42,
    pet: 'hamster',
  },
  {
    firstName: 'Bo',
    lastName: 'Koepp',
    age: 62,
    pet: 'dog',
  },
  {
    firstName: 'Lincoln',
    lastName: 'Emard',
    age: 50,
    pet: 'rabbit',
  },
  {
    firstName: 'Cecil',
    lastName: 'Dickens',
    age: 28,
    pet: 'rabbit',
  },
  {
    firstName: 'Benton',
    lastName: 'Stroman',
    age: 59,
    pet: 'rabbit',
  },
  {
    firstName: 'Clotilde',
    lastName: 'Robel',
    age: 19,
    pet: 'hamster',
  },
  {
    firstName: 'Presley',
    lastName: 'Pagac',
    age: 45,
    pet: 'dog',
  },
  {
    firstName: 'Mazie',
    lastName: 'Medhurst',
    age: 21,
    pet: 'dog',
  },
  {
    firstName: 'Mario',
    lastName: 'Quitzon',
    age: 66,
    pet: 'hamster',
  },
  {
    firstName: 'Maxime',
    lastName: 'Daniel',
    age: 45,
    pet: 'dog',
  },
  {
    firstName: 'Josh',
    lastName: 'Russel',
    age: 29,
    pet: 'cat',
  },
  {
    firstName: 'Calista',
    lastName: 'Becker',
    age: 21,
    pet: 'rabbit',
  },
  {
    firstName: 'Florence',
    lastName: 'Prohaska',
    age: 41,
    pet: 'dog',
  },
  {
    firstName: 'Rodrigo',
    lastName: 'Gutmann',
    age: 48,
    pet: 'dog',
  },
  {
    firstName: 'Kay',
    lastName: 'Spinka',
    age: 53,
    pet: 'cat',
  },
  {
    firstName: 'Andres',
    lastName: 'Watsica',
    age: 50,
    pet: 'dog',
  },
  {
    firstName: 'Osborne',
    lastName: 'Schmeler',
    age: 21,
    pet: 'hamster',
  },
  {
    firstName: 'Elva',
    lastName: 'Abbott',
    age: 47,
    pet: 'rabbit',
  },
  {
    firstName: 'Price',
    lastName: 'Okuneva',
    age: 23,
    pet: 'rabbit',
  },
  {
    firstName: 'Cielo',
    lastName: 'Kirlin',
    age: 40,
    pet: 'dog',
  },
  {
    firstName: 'Sienna',
    lastName: 'Cole',
    age: 30,
    pet: 'rabbit',
  },
];

// Write a function that takes a list of people and gives us back a new list with only the first names of people between the ages of 30 and 50.

// Please do not import any external libraries in your solution.

function getNamesForPeopleInAgeRange(people) {
  // filter array of people by age range 30-50
  const result = [];

  people.map((person) => {
    if (person.age >= 30 && person.age <= 50) result.push(person.firstName);
  });
  console.log('🚀 ~ result', result);
  return result;
}
getNamesForPeopleInAgeRange(data);
