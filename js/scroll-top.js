window.onscroll = () => {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.getElementById("scroll-to-top-button").style.display = "flex";
  } else {
    document.getElementById("scroll-to-top-button").style.display = "none";
  }
}

document.querySelector('.scroll-top').onclick = () => {
  window.scrollTo(scrollY, 0);
}