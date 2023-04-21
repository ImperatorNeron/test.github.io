const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelectorAll('.menu-item');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('touchstart', function (event) {
  menu.classList.toggle('active');
  event.stopPropagation();
});

menuItems.forEach(item => {
  item.addEventListener('click', function (event) {
    menu.classList.remove('active');
    event.stopPropagation();
  });
});

document.addEventListener('touchstart', function (event) {
  if (!menu.contains(event.target) && menu.classList.contains('active') && !event.target.classList.contains('menu-toggle')) {
    menu.classList.remove('active');
  }
});
document.addEventListener('mousedown', function (event) {
  if (!menu.contains(event.target) && menu.classList.contains('active') && !event.target.classList.contains('menu-toggle')) {
    menu.classList.remove('active');
  }
});