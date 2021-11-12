const keyword = document.querySelector("#searchGif");
const browsegifs = document.querySelector("#browsegifs");
const switchGif = document.querySelector("#togglegifs");
const imgGifPoll = document.querySelector(".imgGifPoll");

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
        data-still="${gif.images.fixed_height_small_still.url}"
    >
  `
    )
    .join("");
}

function toggleGifs(e) {
  const allImgs = browsegifs.querySelectorAll("img");

  if (!switchGif.checked) {
    allImgs.forEach((img) => (img.src = img.dataset.still));
  } else {
    allImgs.forEach((img) => (img.src = img.dataset.small));
  }
}

function selectGif(e) {
  if (!e.target.matches("img")) return;

  const url = e.target.dataset.original;

  const myModal = bootstrap.Modal.getInstance(
    document.getElementById("modalgifs")
  );
  myModal.hide();

  imgGifPoll.innerHTML = `<img src="${url}">`;

  keyword.value = "";
  browsegifs.innerHTML = "";
}

keyword.addEventListener("keyup", getGifs);
switchGif.addEventListener("change", toggleGifs);
browsegifs.addEventListener("click", selectGif);
