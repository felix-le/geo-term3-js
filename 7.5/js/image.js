const imgBtn = document.querySelector('#img-btn');
const chooseFileBtn = document.querySelector('#choose-file-btn');
const imgGifPoll = document.querySelector('#imgGifPoll');

function isImgCreated() {
  const isImg = imgGifPoll.querySelector('[data-is-img]');
  return isImg.dataset.isImg === 'true';
}

function addImgProps(newTweet) {
  const modTweet = {
    ...newTweet,
    src: imgGifPoll.querySelector('img').src,
    isImgCreated: true,
  };
  return modTweet;
}

function displayImg(tweet) {
  return `<img src="${tweet.src}" class="col s12">`;
}

function handleFileSelect(evt) {
  const reader = new FileReader();

  reader.addEventListener('load', (e) => {
    imgGifPoll.innerHTML = `<img src="${e.target.result}" class="col s6 offset-s3" data-is-img="true">`;
  });
  reader.readAsDataURL(evt.target.files[0]);
}

imgBtn.addEventListener('click', () => chooseFileBtn.click());

chooseFileBtn.addEventListener('change', handleFileSelect);

export const img = {
  isCreated: isImgCreated,
  addProps: addImgProps,
  display: displayImg,
};
