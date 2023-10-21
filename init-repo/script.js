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
