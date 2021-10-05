const textAreaValue = document.querySelector('#textarea1');
const tweets = [];
const feed = document.querySelector('#feed');
const tweetbtn = document.querySelector('#tweetbtn');

function tweetNew() {
  const text = textAreaValue.value;
  const newTweet = {
    text,
    avatar: 'https://avatars.githubusercontent.com/u/5135436?v=4',
  };

  tweets.push(newTweet);

  render();
}

function render() {
  feed.innerHTML = tweets
    .map(
      (tweet, i) => `<div class="card horizontal" data-tweet="${i}>
  <div class="card-image">
    <img
      src=${tweet.avatar}
      style="width: 70px; height: 70px"
    />
  </div>
  <div class="card-stacked">
    <div class="card-content">
      <p>${tweet.text}</p>
      <br />
    </div>
  </div>
</div>`
    )
    .join('');
}

tweetbtn.addEventListener('click', tweetNew);
