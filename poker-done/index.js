const winnerBtn = document.querySelector('#winner');
const code = document.querySelector('code');

import { getWinnerAsync } from './winner.js';

const hands = [
  ['AC', 'KD', 'QH', 'JS', 'KC'],
  ['2C', '2S'],
  ['10H', 'JD'],
  ['KS', 'KH'],
];

function generateUrl() {
  const url = 'https://api.pokerapi.dev/v1/winner/texas_holdem?';

  const newUrl = hands.reduce((acc, cur, i) => {
    if (i === 0) {
      return `${acc}cc=${cur}`;
    }

    return `${acc}&pc[]=${cur}`;
  }, url);

  return newUrl;
}
function renderCode() {
  code.textContent = generateUrl();
}

renderCode();

winnerBtn.addEventListener('click', () => getWinnerAsync(generateUrl()));
