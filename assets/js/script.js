// const gsap = require('C:/Sandbox/node_modules/gsap/dist/gsap');

// import { gsap } from "C:/Sandbox/node_modules/gsap/dist/gsap";

import { gsap } from "gsap";




gsap.to(".box", { rotation: 27, x: 100, duration: 1 });

const menu = document.querySelector('.menu');
const lines = menu.querySelectorAll('span.line');

menu.addEventListener('mouseenter', () => {
  lines[0].classList.add('rotated45');
  lines[1].classList.add('rotatedMinus45');
});

menu.addEventListener('mouseleave', () => {
  lines[0].classList.remove('rotated45');
  lines[1].classList.remove('rotatedMinus45');
});
