import * as emojiLib from './emoji.js';
import * as gifsLib from './gifs.js';

const textArea = document.querySelector('#textarea1');
const tweets = [];
const feed = document.querySelector('#feed');
const btn = document.querySelector('#tweet-btn');

function tweetNew() {
  const text = textArea.value;
  const newTweet = {
    text,
    avatar: 'https://avatars1.githubusercontent.com/u/7874705?v=4',
    liked: false,
  };

  tweets.unshift(newTweet);
  textArea.value = '';
  render();
}

function render() {
  feed.innerHTML = tweets
    .map(
      (tweet, index) => `
    <aside>
    <div>
      <img
        class="avatar"
        src="${tweet.avatar}"
      />
    </div>
    <div class="formatted-tweet">
      <h6>
        <a href="https://twitter.com/avcoder">Albert V.</a>
        <span class="username">@avcoder</span>
      </h6>
      <p>${tweet.text}</p>
      <div class="imgGifPoll"></div>
      <div>
        <section>
          <div id="reactions" class="btn-group mr-2">
            <button
              type="button"
              class="btn btn-secondary mdi mdi-message-outline"
              aria-label="reply"
            ></button>
            <button 
              type="button"
              class="btn btn-secondary mdi mdi-repeat"
              aria-label="retweet"
            ></button>
            <button data-index=${index}
              type="button"
              class="btn btn-secondary mdi ${
                tweet.liked ? 'mdi-heart' : 'mdi-heart-outline'
              }"
              aria-label="like"
              style=""
            ></button>
            <button
              type="button"
              class="btn btn-secondary mdi mdi-upload"
              aria-label="share"
            ></button>
          </div>
        </section>
      </div>
    </div>
  </aside>
    `
    )
    .join('');
}

function likedToggle(e) {
  const index = e.target.dataset.index;
  tweets[index].liked = !tweets[index].liked;
  if (tweets[index].liked) {
    console.log(`Liked tweet ${index}`);
  } else {
    console.log(`Unliked tweet ${index}`);
  }
  render();
}

btn.addEventListener('click', tweetNew);
feed.addEventListener('click', likedToggle);
