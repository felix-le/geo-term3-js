const emojiBtn = document.querySelector('#emoji-btn');
const modalContent = document.querySelector('.modal-content');
const emojiArray = [];
const textAreaValue2 = document.querySelector('#textarea1');

const categories = document.querySelector('.collection-item');

fetch('https://unpkg.com/emoji.json@13.1.0/emoji.json')
  .then((res) => res.json())
  .then((emojis) => emojiArray.push(...emojis));

function showEmojisModal(e, emojis = emojiArray) {
  modalContent.innerHTML = emojis
    .map((emoji) => `<span >${emoji.char}</span>`)
    .join('');
}

function inserEmoji(e) {
  const emoji = e.target.textContent;
  textAreaValue2.value += emoji;
}

function filterDisplay(e) {
  if (!e.target.matches('img')) return;

  const category = e.target.dataset.category;
  const filtererdArr = emojiArray.filter((emoji = '') =>
    emoji.category.toLowerCase().includes(category)
  );
  showEmojisModal(null, filtererdArr);
}

emojiBtn.addEventListener('click', showEmojisModal);
modalContent.addEventListener('click', inserEmoji);
categories.addEventListener('click', filterDisplay);
