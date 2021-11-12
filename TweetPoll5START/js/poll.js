const imgGifPoll = document.querySelector('#imgGifPoll');

function insertPoll() {
  imgGifPoll.innerHTML = `
  <br/>  <form action="" id="pollchoices">
  <div class="form-group">
  <input type="text" class="form-control w-50 mx-auto" id="pollchoice1" maxlength="25" placeholder="Choice 1"/>
  <br/>
  <input type="text" class="form-control w-50 mx-auto" id="pollchoice2" maxlength="25" placeholder="Choice 2"/>
  <br/>
  <input type="text" class="form-control w-50 mx-auto" id="pollchoice3" maxlength="25" placeholder="Choice 3"/>
  <br/>
  <input type="text" class="form-control w-50 mx-auto" id="pollchoice4" maxlength="25" placeholder="Choice 4"/>
  <br/>
  </div>
  </form>
`;
}
function voteOptions() {
  const voted = {
    a: imgGifPoll.querySelector('#pollchoice1').value,
    b: imgGifPoll.querySelector('#pollchoice2').value,
    c: imgGifPoll.querySelector('#pollchoice3').value,
    d: imgGifPoll.querySelector('#pollchoice4').value,
  };
  console.log('🚀 ~ file: poll.js ~ line 26 ~ voteOptions ~ voted', voted);
  return voted;
}

function addProps(newTweet) {
  const modTweet = {
    ...newTweet,
    voteOptions: voteOptions(),
  };
  return modTweet;
}

function isCreate() {
  const voted = voteOptions();

  return !!(voted.a && voted.b && voted.c && voted.d);
}
export const poll = {
  isCreate,
  isPollCreate: true,
  isPollDone: false,
  addProps,
  insertPoll,
  pollResult: {},
  voteOptions,
};
