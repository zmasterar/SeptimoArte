/*---------------- Animacion al Boton toggler-------------------*/
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
const recipientePelicula = document.getElementById("recipient-pelicula");
const descripcionPelicula = document.getElementById("descripcion");
const recipienteGenero = document.getElementById("recipient-genero");
const recipienteImagen = document.getElementById("recipient-imagen");
const agregarPelicula = document.getElementById("agregarPelicula");
const recipientCodigo = document.getElementById("recipient-codigo");

const deleteItem = (id) => {
  fetch(` http://localhost:3000/destacados/${id}`, {
    method: "DELETE",
  });
};

const editItem = (id) => {
  fetch(`http://localhost:3000/destacados/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      title: `${editNamePeli.value}`,
      gen: `${editGen.value}`,
      desc: `${editDesc.value}`,
      img: `${editImg.value}`,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

const listaPeliculas = document.getElementById("listaPeliculas");
fetch("http://localhost:3000/destacados")
  .then((response) => response.json())
  .then((response) => {
    response.map((peli) => {
      const trPelicula = document.createElement("tr");
      const peliculaCont = `<td>${peli.title}</td>
      <td>${peli.desc}</td>
      <td>${peli.gen}</td>
      <td>
      <button
            type="button"
            class="btn btn-success m-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalEdit"
            data-bs-whatever="@mdo"
          >
          <i class="bi bi-pencil"></i>
          </button>
          <div
            class="modal fade"
            id="exampleModalEdit"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Editar Portada de Pelicula
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form id="formModal">
                    <div class="mb-3">
                      <label
                        for="editNamePeli"
                        class="col-form-label fw-bold"
                        >Pelicula:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="editNamePeli"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="editDesc" class="form-label fw-bold"
                        >Descripcion:</label
                      >
                      <textarea
                        class="form-control"
                        id="editDesc"
                        rows="3"
                      ></textarea>
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label fw-bold"
                        >Genero:</label
                      >
                      <input type="text" class="form-control" id="editGen" />
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label fw-bold"
                        >URL Imagen Portada:</label
                      >
                      <input type="text" class="form-control" id="editImg" />
                    </div>
                    <div class="mb-3">
                  </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onclick="editItem(${peli.id})"
                  >
                    Editar
                  </button>
                </div>
              </div>
            </div>
          </div>
      <button
          class="btn btn-danger m-1" onclick="deleteItem(${peli.id})"
        ><i class="bi bi-archive"></i></button>
      </td>
      `;
      trPelicula.innerHTML = peliculaCont;
      listaPeliculas.appendChild(trPelicula);
    });
  });

// agregarPelicula.addEventListener("submit", function (e) {
//   e.preventDefault();
// });
const botonModal = () => {
  fetch("http://localhost:3000/destacados", {
    method: "POST",
    body: JSON.stringify({
      title: `${recipientePelicula.value}`,
      gen: `${recipienteGenero.value}`,
      desc: `${descripcionPelicula.value}`,
      img: `${recipienteImagen.value}`,
      peliKey: `${recipientCodigo.value}`,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};
