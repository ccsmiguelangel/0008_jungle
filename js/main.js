let text = document.querySelector('#S1__text');
let forest = document.querySelector('#forest');
let rocks = document.querySelector('#rocks');
let water = document.querySelector('#water');
let header = document.querySelector('#header');
let btn = document.querySelector("#S1_btn");
window.addEventListener('scroll', ()=>{
  let value = window.scrollY;

  text.style.top = 250 + value * -0.1 + 'px';
  forest.style.top = value * 0.7 + 'px';
  rocks.style.top = value * -0.07 + 'px';
  header.style.top = value * -0.5 + 'px';
  btn.style.top = 350 + value * 0.1 + 'px';
  water.style.top = value * -0.05 + 'px';
});


// function parallax (el, x, val, typeValue) {
//   let el = document.querySelector(el);
//   let x = x;
//   let val = val;
// }