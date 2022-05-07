const fila = document.querySelector(".contenedorCarousel");
const peliculas = document.querySelectorAll(".pelicula");

const flechaIzquierda = document.getElementById("flecha-izquierda");
const flechaDerecha = document.getElementById("flecha-derecha");

// ----------EVENTO PARA LA FLECHA DERECHA-------------//
flechaDerecha.addEventListener("click", () => {
  fila.scrollLeft += fila.offsetWidth;
  const indicadorActivo = document.querySelector(".indicadores .active");
  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add("active");
    indicadorActivo.classList.remove("active");
  }
});
// ----------EVENTO PARA LA FLECHA IZQUIERDA-------------//
flechaIzquierda.addEventListener("click", () => {
  fila.scrollLeft -= fila.offsetWidth;
  const indicadorActivo = document.querySelector(".indicadores .active");
  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add("active");
    indicadorActivo.classList.remove("active");
  }
});

//----------------INDICADORES------------------------
const numeroIndicadores = Math.ceil(peliculas.length / 5);
for (let i = 0; i < numeroIndicadores; i++) {
  const indicador = document.createElement("button");
  if (i === 0) {
    indicador.classList.add("active");
    console.log(indicador);
  }
  document.querySelector(".indicadores").appendChild(indicador);
  indicador.addEventListener("click", (e) => {
    fila.scrollLeft = i * fila.offsetWidth;
    document.querySelector(".indicadores .active").classList.remove("active");
    e.target.classList.add("active");
  });
}

// --------------HOVER PELICULAS----------------------
peliculas.forEach((pelicula) => {
  pelicula.addEventListener("mouseenter", (e) => {
    const elemento = e.currentTarget;
    setTimeout(() => {
      peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
      elemento.classList.add("hover");
    }, 300);
  });
});
fila.addEventListener("mouseleave", () => {
  peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
});
