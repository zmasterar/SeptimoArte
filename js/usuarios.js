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

const deleteItem = (id) => {
  fetch(` http://localhost:3000/destacados/${id}`, {
    method: "DELETE",
  });
};
const editUser = (id) => {
  fetch(`http://localhost:3000/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      userName: `${editUsuario.value}`,
      email: `${editEmail.value}`,
      password: `${editPassword.value}`,
      role: `${editRole.value}`,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

const listaUsuarios = document.getElementById("listaUsuarios");
fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((response) => {
    response.map((user) => {
      const trUsuarios = document.createElement("tr");
      const usuariosCont = `<td>${user.userName}</td>
      <td>${user.email}</td>
      <td>${user.password}</td>
      <td>${user.role}</td>
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
                    Editar Usuarios
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
                        for="editUsuario"
                        class="col-form-label fw-bold"
                        >Usuario:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="editUsuario"
                      />
                    </div>
                    <div class="mb-3">
                    <label
                    for="editEmail"
                    class="col-form-label fw-bold"
                    >Email:</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="editEmail"
                  />
                    </div>
                    <div class="mb-3">
                    <label
                    for="editPassword"
                    class="col-form-label fw-bold"
                    >Password:</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="editPassword"
                  />
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label fw-bold"
                        >Role:</label
                      >
                      <input type="text" class="form-control" id="editRole" />
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
                    onclick="editUser()"
                  >
                    Editar
                  </button>
                </div>
              </div>
            </div>
          </div>
      <button
          class="btn btn-danger m-1" onclick="deleteItem(${user.id})"
        ><i class="bi bi-archive"></i></button>
      </td>
      `;
      trUsuarios.innerHTML = usuariosCont;
      listaUsuarios.appendChild(trUsuarios);
    });
  });

// agregarPelicula.addEventListener("submit", function (e) {
//   e.preventDefault();
// });
