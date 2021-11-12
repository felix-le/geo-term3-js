const keyword = document.querySelector('#keyword');
const browsegifs = document.querySelector('#browsegifs');
const switchGif = document.querySelector('#switchGif');
const imgGifPoll = document.querySelector('#imgGifPoll');

async function getGifs() {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=pEPTndRRzEXMhO8Nn5NK9pBd89VyvjT4&q=${keyword.value}&limit=12`
  );
  const data = await res.json();

  const gifs = [...data.data];
  browsegifs.innerHTML = gifs
    .map(
      (gif) => `
    <img src="${gif.images.fixed_height_small_still.url}"
        data-original="${gif.images.original.url}"
        data-small="${gif.images.fixed_height_small.url}"
        data-still=${gif.images.fixed_height_small_still.url}""
    >
  `
    )
    .join('');
}

function toggleGifs() {
  const allImgs = browsegifs.querySelectorAll('img');

  if (!switchGif.checked) {
    allImgs.forEach((img) => (img.src = img.dataset.still));
  } else {
    allImgs.forEach((img) => (img.src = img.dataset.small));
  }
}

function selectGif(e) {
  if (!e.target.matches('img')) return;

  const url = e.target.dataset.original;

  const elem = document.querySelector('#gifsmodal');
  const instance = M.Modal.getInstance(elem);
  instance.close();

  imgGifPoll.innerHTML = `<div class="card-image col s4 offset-s4"><img data-is-gif="true" src="${url}"></div>`;
}

function isCreated() {
  const isGif = imgGifPoll.querySelector('[data-is-gif]');
  return isGif?.dataset?.isGif == 'true';
}

function addProps(newTweet) {
  const modTweet = {
    ...newTweet,
    src: imgGifPoll.querySelector('img').src,
    isGifCreated: true,
  };
  return modTweet;
}

function displayGif(tweet) {
  return `<img src="${tweet.src}">`;
}

keyword.addEventListener('keyup', getGifs);
switchGif.addEventListener('change', toggleGifs);
browsegifs.addEventListener('click', selectGif);
export const gif = {
  isCreated,
  addProps,
  display: displayGif,
};
