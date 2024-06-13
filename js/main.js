let menu = document.querySelector('.menu i');
let navLinks = document.querySelector('.nav-links');

menu.onclick = () => {
  if (menu.classList.contains('fa-bars')) {
    document.querySelector('.home-nav').style.overflow = 'initial';
    menu.classList.remove('fa-bars');
    menu.classList.add('fa-xmark');
    navLinks.classList.add('active');
  } else {
    document.querySelector('.home-nav').style.overflow = 'hidden';
    menu.classList.add('fa-bars');
    menu.classList.remove('fa-xmark');
    navLinks.classList.remove('active');
  }
}