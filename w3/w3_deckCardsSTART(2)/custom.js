/* Given const h1 = document.querySelector('h1')

In one line of code, using .classList, how would you add the class 'highlight' if that class doesn’t exist in h1,
OR how would you remove the class 'highlight' if that class does exist in h1?*/
const h1 = document.querySelector('h1');

function toggleClass() {
  h1.classList.toggle('highlight');
}

h1.addEventListener('click', toggleClass);
