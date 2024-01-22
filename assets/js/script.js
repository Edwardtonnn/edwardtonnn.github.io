// GSAP Installed 

// Menu functionality 
// On click of menu transform to x and on click again transform back to hamburger see if the is a way to toggle it. 

const menu = document.querySelector('.menu');
const lines = menu.querySelectorAll('span.line');
const menuText = document.querySelectorAll('.logo, .contact a');
const menuContainer = document.querySelector('.menu-container');

menu.addEventListener('click', () => {

  // Checks if there is a closed class if it is closed it will remove the class so the lines can opener. 
  if (menu.classList.contains('open')) {
    lines[0].classList.remove('rotated45');
    lines[1].classList.remove('rotatedMinus45');

    // close the menu here 
    closeMenu();

    menuText.forEach(menuTextItem =>{
      menuTextItem.classList.remove('white');
    });

  } else {
    lines[0].classList.add('rotated45');
    lines[1].classList.add('rotatedMinus45');

    // open the menu here
    openMenu();  
    menuText.forEach(menuTextItem =>{
      menuTextItem.classList.add('white');
    });  
  }

  menu.classList.toggle('open');

   // close menu function 
  function closeMenu(){
    // gsap.to('.menu-container', {display:'none'})
    menuContainer.style.display = 'none'

    revertColors();
  }
  
  // open menu function 
  function openMenu(){
    gsap.to('.menu-container', {display:'block'})

    lines.forEach(line => {
      line.style.borderBottom = '0.5px solid white';
    });
  }

  function revertColors(){
    lines.forEach(line => {
      line.style.borderBottom = '0.5px solid #1a1a1a';
    });

  
  
  }
});



