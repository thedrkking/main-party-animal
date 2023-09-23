const navbarToggle = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar');

navbarToggle.onclick = () => {
  navbar.style.height = navbar.style.height === '100%' ? '0px' : '100%';
};
