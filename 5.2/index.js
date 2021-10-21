const heroes = [
  {
    name: 'Prof. Xavier',
    twitter: '@profx',
    pic: 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0004.gif',
  },
  {
    name: 'Spiderman',
    twitter: '@spidey',
    pic: 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0008.gif',
  },
  {
    name: 'Wolverine',
    pic: 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0011.gif',
    twitter: '@logan',
  },
];

const main = document.querySelector('main');

// queryselector search bar and value
const searchBar = document.querySelector('#search');
// get value from search bar

const submitButton = document.querySelector('#submit');

const heroesString = heroes
  .map(function (hero) {
    return `
      <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
      <div class="dtc w2 w3-ns v-mid">
          <img src="${hero.pic}" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" />
      </div>
      <div class="dtc v-mid pl3">
          <h1 class="f6 f5-ns fw6 lh-title black mv0">${hero.name}</h1>
          <h2 class="f6 fw4 mt0 mb0 black-60">${hero.twitter}</h2>
      </div>
      <div class="dtc v-mid">
          <form class="w-100 tr">
              <button class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+
                  Follow</button>
          </form>
      </div>
  </article>
      `;
  })
  .join('');

main.innerHTML = heroesString;

submitButton.addEventListener('click', function (e) {
  e.preventDefault();
  const searchValue = searchBar.value;
  if (searchValue === '') {
    return;
  }
  const heroesSearchTerm = heroes
    .map(function (hero) {
      const { name, twitter, pic } = hero;
      if (
        name
          .toLowerCase()
          .includes(
            searchValue.toLowerCase() ||
              twitter.toLowerCase().includes(searchValue.toLowerCase())
          )
      ) {
        return `
      <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
      <div class="dtc w2 w3-ns v-mid">
          <img src="${hero.pic}" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" />
      </div>
      <div class="dtc v-mid pl3">
          <h1 class="f6 f5-ns fw6 lh-title black mv0">${hero.name}</h1>
          <h2 class="f6 fw4 mt0 mb0 black-60">${hero.twitter}</h2>
      </div>
      <div class="dtc v-mid">
          <form class="w-100 tr">
              <button class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+
                  Follow</button>
          </form>
      </div>
  </article>
      `;
      }
    })
    .join('');

  main.innerHTML = heroesSearchTerm;
});
