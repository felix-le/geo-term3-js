import './emoji.js';
import './gifs.js';
import { poll } from './poll.js';
const textArea = document.querySelector('#textarea1');
const tweets = [];
const feed = document.querySelector('#feed');
const btn = document.querySelector('#tweet-btn');
const pollBtn = document.querySelector('#poll-btn');

function tweetNew() {
  const text = textArea.value;
  let newTweet = {
    text,
    avatar: 'https://avatars1.githubusercontent.com/u/7874705?v=4',
    liked: false,
    voteOptions: [],
  };

  if (pollBtn.isCreate === true) {
    console.log(1);
  }

  // clear fields
  textArea.value = '';

  // then we can insert our object into our array called tweets
  tweets.unshift(newTweet);

  render();
}
pollBtn.addEventListener('click', poll.insertPoll);
function render() {
  feed.innerHTML = tweets
    .map(
      (tweet, idx) => `
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
      <br/>
      <div class="imgGifPoll">
            <div class="poll flex-col" >
            <button class="vote" id="#vote1"></button>
            <button class="vote" id="#vote2"></button>
            <button class="vote" id="#vote3"></button>
            <button class="vote" id="#vote4"></button>
        </div>
      </div>
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
            <button data-index=${idx}
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
  if (!e.target.matches('[class^="mdi-heart"]')) return;
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
