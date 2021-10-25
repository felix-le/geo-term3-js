import "./emoji.js";
import "./gifs.js";
import { poll } from "./poll.js";

const textArea = document.querySelector("#textarea1");
const tweets = [];
const feed = document.querySelector("#feed");
const btn = document.querySelector("#tweetbtn");

function tweetNew() {
  const text = textArea.value;

  let newTweet = {
    text,
    avatar: "https://avatars.githubusercontent.com/u/7874705?v=4",
  };

  if (poll.isCreated() === true) {
    newTweet = poll.addProps(newTweet);
  }

  tweets.unshift(newTweet);

  textArea.value = "";
  imgGifPoll.innerHTML = "";

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
          <div class= "imgGifpoll">
        ${tweet.isPollCreated ? poll.display(tweet, idx) : ""}

          </div>
        </div>
      </div>
    </div>
    `
    )
    .join("");
}

btn.addEventListener("click", tweetNew);
