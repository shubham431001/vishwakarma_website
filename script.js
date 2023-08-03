var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.display = "";
  } else {
    document.getElementById("navbar").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
}

const toogles = document.querySelector('.toogle');
const toogleBtn = document.querySelector('.toogle i');
const tooglemenu = document.querySelector('.respo-nav');
toogles.onclick = function () {
  tooglemenu.classList.toggle('hidenav');
  const isOpen = tooglemenu.classList.contains('hidenav');

  toogleBtn.classList = isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}