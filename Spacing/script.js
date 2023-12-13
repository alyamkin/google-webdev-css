const box = document.querySelector('.box');
const widthSlider = document.querySelector('.width-slider');
const heightSlider = document.querySelector('.height-slider');

widthSlider.addEventListener('input', ({ target }) => {
  box.style.setProperty('width', `${target.value}rem`);
});

heightSlider.addEventListener('input', ({ target }) => {
  box.style.setProperty('height', `${target.value}rem`);
});
