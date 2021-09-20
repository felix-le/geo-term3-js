const data = [
  {
    avatar:
      'https://robohash.org/debitisautemaspernatur.png?size=50x50&set=set1',
    name: 'Deloria Tern',
    subject: 'Finance',
    body: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, commodo placerat.',
  },
  {
    avatar: 'https://robohash.org/quasinmolestias.bmp?size=50x50&set=set1',
    name: 'Samaria Zorzetti',
    subject: 'Finance',
    body: 'Aenean auctor gravida sem.',
  },
  {
    avatar: 'https://robohash.org/dolorquaeratquia.jpg?size=50x50&set=set1',
    name: 'Bradford Hendrick',
    subject: 'Capital Goods',
    body: 'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
  },
  {
    avatar: 'https://robohash.org/enimdolorumvitae.bmp?size=50x50&set=set1',
    name: 'Timmie Eacle',
    subject: 'Health Care',
    body: 'Integer tincidunt ante vel ipsum.',
  },
  {
    avatar: 'https://robohash.org/voluptasbeataeatque.bmp?size=50x50&set=set1',
    name: 'Evered Johantges',
    subject: 'n/a',
    body: 'Praesent lectus.',
  },
  {
    avatar: 'https://robohash.org/ipsamminimatempore.bmp?size=50x50&set=set1',
    name: 'Dorthea Gosz',
    subject: 'Finance',
    body: 'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis olestie lorem.',
  },
  {
    avatar:
      'https://robohash.org/laudantiumaliasquisquam.bmp?size=50x50&set=set1',
    name: 'Ammamaria Kelby',
    subject: 'Technology',
    body: 'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, turpis.',
  },
];

// Question 1:
// Write a function that takes in an array of objects and returns an array of the objects' names.
const listEmail = document.querySelector('#list');

const singleEmail = (item) => {
  return `<div class="email-item pure-g">
<div class="pure-u">
  <img
    width="64"
    height="64"
    alt="${item.name} avatar"
    class="email-avatar"
    src=${item.avatar}
  />
</div>

<div class="pure-u-3-4">
  <h5 class="email-name">${item.name}</h5>
  <h4 class="email-subject">${item.subject}</h4>
  <p class="email-desc">
    ${item.body}
  </p>
</div>
</div>`;
};
data.map((item) => {
  return (listEmail.innerHTML += singleEmail(item));
});

// Question 2:
//Clicking the 'Compose' button will display a new email at the top of the inbox (showing your name, your github's avatar, a random subject line, and a sentence of whatever).
// Github API https://api.github.com/users/felix-le
const newEmail = {
  avatar: '"https://avatars.githubusercontent.com/u/5135436?v=4"',
  name: 'Felix Le',
  subject: 'Web developer',
  body: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,',
};

function handleCompose(e) {
  e.preventDefault();
  listEmail.innerHTML = singleEmail(newEmail);
  data.map((item) => {
    return (listEmail.innerHTML += singleEmail(item));
  });
}

const btnCompose = document.querySelector('.pure-button');
btnCompose.addEventListener('click', doSomething);
