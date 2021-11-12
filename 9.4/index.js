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

new Vue({
  el: '#app',
  data: {
    heroes,
  },
});
