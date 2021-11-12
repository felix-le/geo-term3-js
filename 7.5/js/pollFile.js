const pollBtn = document.querySelector('#poll-btn');
const imgGifPoll = document.querySelector('#imgGifPoll');

function voteOptions() {
  const voted = {
    a: imgGifPoll.querySelector('#pollchoice1')?.value,
    b: imgGifPoll.querySelector('#pollchoice2')?.value,
    c: imgGifPoll.querySelector('#pollchoice3')?.value,
    d: imgGifPoll.querySelector('#pollchoice4')?.value,
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
    <div class="row">
        <form id="pollchoices" class="col s6 offset-s3">
           <input type="text" id="pollchoice1" maxlength="25" placeholder="Choice 1" />
           <input type="text" id="pollchoice2" maxlength="25" placeholder="Choice 2" />
           <input type="text" id="pollchoice3" maxlength="25" placeholder="Choice 3" />
           <input type="text" id="pollchoice4" maxlength="25" placeholder="Choice 4" />
        </form>
    </div>
  `;
}

function votesToPercetages(votes) {
  const total = votes.a + votes.b + votes.c + votes.d;

  return {
    a: Math.floor((votes.a / total) * 100),
    b: Math.floor((votes.b / total) * 100),
    c: Math.floor((votes.c / total) * 100),
    d: Math.floor((votes.d / total) * 100),
    totalVotes: total,
  };
}

function getIndexOfChosen(letter) {
  const dictionary = ['a', 'b', 'c', 'd'];
  return dictionary.findIndex((el) => el === letter);
}

function displayVotes(tweet, idx) {
  if (tweet.isPollDone) {
    const percents = votesToPercetages(tweet.pollResults);
    const chose = getIndexOfChosen(tweet.pollResults.youChose);

    return `
    <div class="bargraph">
        <div class="bar ${chose === 0 ? 'chosen' : ''}" style="flex-basis: ${
      percents.a
    }%">${tweet.voteOptions.a}</div>
        <div>${percents.a}%</div>
    </div>
    <div class="bargraph">
        <div class='bar ${chose === 1 ? 'chosen' : ''}' style="flex-basis: ${
      percents.b
    }%">${tweet.voteOptions.b}</div>
        <div>${percents.b}%</div>
    </div>
    <div class="bargraph">
        <div class="bar ${chose === 2 ? 'chosen' : ''}" style="flex-basis: ${
      percents.c
    }%">${tweet.voteOptions.c}</div>
        <div>${percents.c}%</div>
    </div>
    <div class="bargraph">
        <div class="bar ${chose === 3 ? 'chosen' : ''}" style="flex-basis: ${
      percents.d
    }%">${tweet.voteOptions.d}</div>
        <div>${percents.d}%</div>
    </div>
    <p>${percents.totalVotes} votes</p>
    `;
  }

  return `
  <div data-idx="${idx}">
    <button class="vote col s12 btn-small" value="a">${tweet.voteOptions.a}</button>
    <button class="vote col s12 btn-small" value="b">${tweet.voteOptions.b}</button>
    <button class="vote col s12 btn-small" value="c">${tweet.voteOptions.c}</button>
    <button class="vote col s12 btn-small" value="d">${tweet.voteOptions.d}</button>
  </div>
  `;
}

pollBtn.addEventListener('click', insertPoll);

export const poll = {
  isCreated,
  addProps,
  display: displayVotes,
};
