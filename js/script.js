
function toggleMenu() {
  const menu = document.querySelector('.fullscreen-menu');
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
  }
}
