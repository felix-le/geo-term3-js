import { fetchData } from './fetchData.js';

const btn = document.querySelector('#getanswer');
const answer = document.querySelector('#answer');

// async function getAnswer() {
//   try {
//     const res = await fetch(
//       'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
//     );
//     const data = await res.json();
//     console.log('🚀  data', data);
//   } catch (error) {
//     console.log('🚀 error', error);
//   }
// }

btn.addEventListener(
  'click',
  fetchData('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
);
