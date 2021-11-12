import './emoji.js';
import { gif } from './gifs.js';
import { poll } from './pollFile.js';
import { img } from './image.js';

const textArea = document.querySelector('#textarea1');
const tweets = [];
const feed = document.querySelector('#feed');
const btn = document.querySelector('#tweetbtn');

function tweetNew() {
  const text = textArea.value;

  let newTweet = {
    text,
    avatar: 'https://avatars.githubusercontent.com/u/7874705?v=4',
  };

  if (img.isCreated() === true) {
    newTweet = img.addProps(newTweet);
  }

  if (poll.isCreated() === true) {
    newTweet = poll.addProps(newTweet);
  } else if (gif.isCreated() === true) {
    newTweet = gif.addProps(newTweet);
  }

  tweets.unshift(newTweet);

  textArea.value = '';
  imgGifPoll.innerHTML = '';

  render();
}

function render() {
  feed.innerHTML = tweets
    .map(
      (tweet, idx) => `
      <div class="card horizontal">
      <div class="card-image">
        <img
          src="${tweet.avatar}"
          style="height: 70px; width: 70px"
        />
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>${tweet.text}</p>
          <br />
          <div class="imgGifPoll">
            ${tweet.isPollCreated ? poll.display(tweet, idx) : ''}
            ${tweet.isGifCreated ? gif.display(tweet) : ''}
          </div>
          <div class="imgGifPoll">
            ${tweet.isImgCreated ? img.display(tweet) : ''}
          </div>
        </div>
      </div>
    </div>
    `
    )
    .join('');
}

async function vote(e) {
  if (!e.target.matches('.vote')) return;

  const res = await fetch(
    `https://optimistic-kare-843d65.netlify.app/.netlify/functions/hello?vote=${e.target.value}`
  );
  const data = await res.json();

  const index = e.target.closest('[data-idx]').dataset.idx;

  tweets[index].pollResults = {
    a: data[0],
    b: data[1],
    c: data[2],
    d: data[3],
    youChose: e.target.value,
  };

  tweets[index].isPollDone = true;

  render();
}

btn.addEventListener('click', tweetNew);
feed.addEventListener('click', vote);
