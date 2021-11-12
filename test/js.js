const divs = document.querySelectorAll('div');

function logClass(e) {
  e.stopPropagation();
  console.log('🚀', this.classList.value);
}

divs.forEach((div) => div.addEventListener('click', logClass));
