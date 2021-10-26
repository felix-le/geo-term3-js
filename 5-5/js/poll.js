const pollBtn = document.querySelector('#poll-btn');
const imgGifPoll = document.querySelector('#imgGifPoll');

function voteOptions() {
  const voted = {
    a: imgGifPoll.querySelector('#pollchoice1').value,
    b: imgGifPoll.querySelector('#pollchoice2').value,
    c: imgGifPoll.querySelector('#pollchoice3').value,
    d: imgGifPoll.querySelector('#pollchoice4').value,
  };
  return voted;
}

function isCreated() {
  const voted = voteOptions();
  return !!(voted.a && voted.b && voted.c && voted.d);
}

function addProps(newTweet) {
  const modTweet = {
    ...newTweet,
    isPollCreated: true,
    isPollDone: false,
    voteOptions: voteOptions(),
    pollResults: {},
  };

  return modTweet;
}

function insertPoll() {
  imgGifPoll.innerHTML = `
<div class="container">
<div class="row">
<form id="pollchoices" class="col s6 offset-3">
<input type="text" id="pollchoice1" maxlength="25" placeholder="Choice 1"/>
<input type="text" id="pollchoice2" maxlength="25" placeholder="Choice 2"/>
<input type="text" id="pollchoice3" maxlength="25" placeholder="Choice 3"/>
<input type="text" id="pollchoice4" maxlength="25" placeholder="Choice 4"/>
</div>
</div>

`;
}

function dsiplayVotes(tweet, idx) {
  return `
    <div data-idx="${idx}">
    <button class ="vote col s12 btn-small">${tweet.voteOptions.a}</button>
    <button class ="vote col s12 btn-small">${tweet.voteOptions.b}</button>
    <button class ="vote col s12 btn-small">${tweet.voteOptions.c}</button>
    <button class ="vote col s12 btn-small">${tweet.voteOptions.d}</button>
    </div>
    `;
}

pollBtn.addEventListener('click', insertPoll);

export const poll = {
  isCreated,
  addProps,
  display: dsiplayVotes,
};
