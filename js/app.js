/*---------------- Animacion al Boton toggler-------------------*/
let burger = document.querySelector(".botonBurger");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
});
  
const fila1 = document.querySelector(".contenedorJs1");
const fila2 = document.querySelector(".contenedorJs2");
const fila3 = document.querySelector(".contenedorJs3");
const fila4 = document.querySelector(".contenedorJs4");
const peliculasFila1 = document.querySelectorAll(".peliculaFila1");
const peliculasFila2 = document.querySelectorAll(".peliculaFila2");
const peliculasFila3 = document.querySelectorAll(".peliculaFila3");
const peliculasFila4 = document.querySelectorAll(".peliculaFila4");

// ----------EVENTO PARA LA FLECHA DERECHA-------------//
const botonDerecha1 = (id) => {
  const flechaDerecha1 = document.getElementById(id);
  fila1.scrollLeft += fila1.offsetWidth;
  console.log(id);
  const indicadorActivo = document.querySelector(
    ".containerIndicadores1 .active"
  );
  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add("active");
    indicadorActivo.classList.remove("active");
  }
};
const botonDerecha2 = (id) => {
  const flechaDerecha2 = document.getElementById(id);
  fila2.scrollLeft += fila2.offsetWidth;
  console.log(id);
  const indicadorActivo = document.querySelector(
    ".containerIndicadores2 .active"
  );
  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add("active");
    indicadorActivo.classList.remove("active");
  }
};
const botonDerecha3 = (id) => {
  const flechaDerecha3 = document.getElementById(id);
  fila3.scrollLeft += fila3.offsetWidth;
  console.log(id);
  const indicadorActivo = document.querySelector(
    ".containerIndicadores3 .active"
  );
  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add("active");
    indicadorActivo.classList.remove("active");
  }
};
const botonDerecha4 = (id) => {
  const flechaDerecha4 = document.getElementById(id);
  fila4.scrollLeft += fila4.offsetWidth;
  console.log(id);
  const indicadorActivo = document.querySelector(
    ".containerIndicadores4 .active"
  );
  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add("active");
    indicadorActivo.classList.remove("active");
  }
};

// ----------EVENTO PARA LA FLECHA IZQUIERDA-------------//
const botonIzquierda1 = (id) => {
  const flechaIzquierda1 = document.getElementById(id);
  fila1.scrollLeft -= fila1.offsetWidth;
  console.log(id);
  const indicadorActivo = document.querySelector(
    ".containerIndicadores1 .active"
  );
  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add("active");
    indicadorActivo.classList.remove("active");
  }
};
const botonIzquierda2 = (id) => {
  const flechaIzquierda2 = document.getElementById(id);
  fila2.scrollLeft -= fila2.offsetWidth;
  console.log(id);
  const indicadorActivo = document.querySelector(
    ".containerIndicadores2 .active"
  );
  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add("active");
    indicadorActivo.classList.remove("active");
  }
};
const botonIzquierda3 = (id) => {
  const flechaIzquierda3 = document.getElementById(id);
  fila3.scrollLeft -= fila3.offsetWidth;
  console.log(id);
  const indicadorActivo = document.querySelector(
    ".containerIndicadores3 .active"
  );
  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add("active");
    indicadorActivo.classList.remove("active");
  }
};
const botonIzquierda4 = (id) => {
  const flechaIzquierda4 = document.getElementById(id);
  fila4.scrollLeft -= fila4.offsetWidth;
  console.log(id);
  const indicadorActivo = document.querySelector(
    ".containerIndicadores4 .active"
  );
  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add("active");
    indicadorActivo.classList.remove("active");
  }
};

//----------------INDICADORES------------------------
const numeroIndicadoresFila1 = Math.ceil(peliculasFila1.length / 5);
const numeroIndicadoresFila2 = Math.ceil(peliculasFila2.length / 5);
const numeroIndicadoresFila3 = Math.ceil(peliculasFila3.length / 5);
const numeroIndicadoresFila4 = Math.ceil(peliculasFila4.length / 5);
for (let i = 0; i < numeroIndicadoresFila1; i++) {
  const indicador = document.createElement("button");
  if (i === 0) {
    indicador.classList.add("active");
  }
  document.querySelector(".containerIndicadores1").appendChild(indicador);
  indicador.addEventListener("click", (e) => {
    fila1.scrollLeft = i * fila1.offsetWidth;
    document
      .querySelector(".containerIndicadores1 .active")
      .classList.remove("active");
    e.target.classList.add("active");
  });
}
for (let i = 0; i < numeroIndicadoresFila2; i++) {
  const indicador = document.createElement("button");
  if (i === 0) {
    indicador.classList.add("active");
  }
  document.querySelector(".containerIndicadores2").appendChild(indicador);
  indicador.addEventListener("click", (e) => {
    fila2.scrollLeft = i * fila2.offsetWidth;
    document
      .querySelector(".containerIndicadores2 .active")
      .classList.remove("active");
    e.target.classList.add("active");
  });
}
for (let i = 0; i < numeroIndicadoresFila3; i++) {
  const indicador = document.createElement("button");
  if (i === 0) {
    indicador.classList.add("active");
  }
  document.querySelector(".containerIndicadores3").appendChild(indicador);
  indicador.addEventListener("click", (e) => {
    fila3.scrollLeft = i * fila3.offsetWidth;
    document
      .querySelector(".containerIndicadores3 .active")
      .classList.remove("active");
    e.target.classList.add("active");
  });
}
for (let i = 0; i < numeroIndicadoresFila4; i++) {
  const indicador = document.createElement("button");
  if (i === 0) {
    indicador.classList.add("active");
  }
  document.querySelector(".containerIndicadores4").appendChild(indicador);
  indicador.addEventListener("click", (e) => {
    fila4.scrollLeft = i * fila4.offsetWidth;
    document
      .querySelector(".containerIndicadores4 .active")
      .classList.remove("active");
    e.target.classList.add("active");
  });
}

// --------------HOVER PELICULAS----------------------
peliculasFila1.forEach((pelicula) => {
  pelicula.addEventListener("mouseenter", (e) => {
    const elemento = e.currentTarget;
    setTimeout(() => {
      peliculasFila1.forEach((pelicula) => pelicula.classList.remove("hover"));
      elemento.classList.add("hover");
    }, 300);
  });
});
peliculasFila2.forEach((pelicula) => {
  pelicula.addEventListener("mouseenter", (e) => {
    const elemento = e.currentTarget;
    setTimeout(() => {
      peliculasFila2.forEach((pelicula) => pelicula.classList.remove("hover"));
      elemento.classList.add("hover");
    }, 300);
  });
});
peliculasFila3.forEach((pelicula) => {
  pelicula.addEventListener("mouseenter", (e) => {
    const elemento = e.currentTarget;
    setTimeout(() => {
      peliculasFila3.forEach((pelicula) => pelicula.classList.remove("hover"));
      elemento.classList.add("hover");
    }, 300);
  });
});
peliculasFila4.forEach((pelicula) => {
  pelicula.addEventListener("mouseenter", (e) => {
    const elemento = e.currentTarget;
    setTimeout(() => {
      peliculasFila4.forEach((pelicula) => pelicula.classList.remove("hover"));
      elemento.classList.add("hover");
    }, 300);
  });
});
fila1.addEventListener("mouseleave", () => {
  peliculasFila1.forEach((pelicula) => pelicula.classList.remove("hover"));
});
fila2.addEventListener("mouseleave", () => {
  peliculasFila2.forEach((pelicula) => pelicula.classList.remove("hover"));
});
fila3.addEventListener("mouseleave", () => {
  peliculasFila3.forEach((pelicula) => pelicula.classList.remove("hover"));
});
fila4.addEventListener("mouseleave", () => {
  peliculasFila4.forEach((pelicula) => pelicula.classList.remove("hover"));

});
