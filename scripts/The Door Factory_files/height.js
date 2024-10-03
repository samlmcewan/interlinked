// Set height of hero triangle to fit content 

const element1 = document.querySelector('.hero-text-container');
const element2 = document.querySelector('.hero-text');
const element2Height = element2.offsetHeight;
const newHeight = element2Height*2;
element1.style.height = newHeight + 'px';
