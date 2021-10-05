const cards = [
  {
    image: 'https://deckofcardsapi.com/static/img/AH.png',
    value: 'ACE',
    suit: 'HEARTS',
    code: 'AH',
  },
  {
    image: 'https://deckofcardsapi.com/static/img/KH.png',
    value: 'KING',
    suit: 'HEARTS',
    code: 'KH',
  },
  {
    image: 'https://deckofcardsapi.com/static/img/QH.png',
    value: 'QUEEN',
    suit: 'HEARTS',
    code: 'QH',
  },
  {
    image: 'https://deckofcardsapi.com/static/img/JH.png',
    value: 'JACK',
    suit: 'HEARTS',
    code: 'JH',
  },
  {
    image: 'https://deckofcardsapi.com/static/img/0H.png',
    value: '10',
    suit: 'HEARTS',
    code: '0H',
  },
];

const root = document.getElementById('root');
const dealCards = document.querySelector('button');
const renderData = [];

function cardRender() {
  root.innerHTML = renderData
    .map((card) => {
      return `<img src="${card.image}" alt="${card.value} of ${card.suit}" data-code="${card.code}" data-value="${card.value}"/>`;
    })
    .join('');

  const allImages = document.querySelectorAll('img');
  allImages.forEach((image) => {
    image.addEventListener('click', handleClick);
  });
}

function handleClick(e) {
  const dom = e.target;
  dom.classList.add('selected');
}

const handleDealCard = () => {
  const lastEle = cards.shift();
  renderData.push(lastEle);
  cardRender();
};

dealCards.addEventListener('click', handleDealCard);
