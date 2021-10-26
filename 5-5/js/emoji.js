const emojiBtn = document.querySelector('#emoji-btn');
const modalContent = document.querySelector('.modal-content');
const emojisArray = [];
const textArea = document.querySelector('#textarea1');
const categories = document.querySelector('.collection-item');

fetch('https://unpkg.com/emoji.json@13.1.0/emoji.json')
  .then((res) => res.json())
  .then((emojis) => emojisArray.push(...emojis));

function showEmojisModal(e, emojis = emojisArray) {
  modalContent.innerHTML = emojis
    .map((emoji) => `<span>${emoji.char}</span>`)
    .join('');
}

function insertEmoji(e) {
  textArea.value += e.target.textContent;
}

function filterDisplay(e) {
  if (!e.target.matches('img')) return;

  const category = e.target.dataset.category;
  const filteredArray = emojisArray.filter((emoji) =>
    emoji.category.toLowerCase().includes(category)
  );

  showEmojisModal(null, filteredArray);
}

emojiBtn.addEventListener('click', showEmojisModal);
modalContent.addEventListener('click', insertEmoji);
categories.addEventListener('click', filterDisplay);
