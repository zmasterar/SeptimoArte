// Animacion al Boton toggler
let burger = document.querySelector(".botonBurger");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
});

let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    nav.classList.add("bg-nav", "shadow");
  } else {
    nav.classList.remove("bg-nav", "shadow");
  }
});
