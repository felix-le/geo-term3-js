const gifSearch = document.querySelector('#searchGif');
const searchResults = document.querySelector('#browsegifs');
const togglegifs = document.querySelector('#togglegifs');
let isGif = false;
let searchTermValue = '';
// function fectch data
const fetchData = async (searchTermValue, cb) => {
  try {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=5QdP6ovgu4pvQnw8voWZvJ6UBz0cGKlf&limit=10&q=${searchTermValue}`
    );
    const data = await res.json();
    setTimeout(() => {
      cb(data);
    }, 1000);
  } catch (error) {
    console.log('🚀 error', error);
  }
};

togglegifs.addEventListener('click', () => {
  if (!isGif) {
    isGif = true;

    // Render gifs
    const renderGifs2 = (gifs) => {
      const data = gifs.data;
      // preview_webp
      searchResults.innerHTML = `
    ${data
      ?.map(
        (item) =>
          `<img src="${item.images.preview_webp.url}" style="height:auto; max-width:150px;"/>`
      )
      .join('')}
  `;
    };
    fetchData(searchTermValue, renderGifs2);
  } else {
    isGif = false;
    fetchData(searchTermValue, renderGifs);
  }
});

// Render gifs
const renderGifs = (gifs) => {
  const data = gifs.data;
  // original_still
  searchResults.innerHTML = `
    ${data
      ?.map(
        (item) =>
          `<img src="${item.images.original_still.url}" style="height:auto; max-width:150px;"/>`
      )
      .join('')}
  `;
  // preview_webp
};

// Event listener

gifSearch.addEventListener('keyup', (e) => {
  searchTermValue = e.target.value;
  fetchData(searchTermValue, renderGifs);
});
