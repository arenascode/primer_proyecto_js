// Funciones del index.html

// Control de Ingreso 

// export function controlDeIngreso() {
//   let edad = parseInt(prompt("Qué Edad Tienes?"));

//   edad >= 18 ? bienvenido() : rechazado()
// }

// function bienvenido() {
//   console.log("El usuario puede entrar");
//   Swal.fire({
//     icon: "success",
//     title: "Bienvenido/a!",
//     text: "Esperamos disfrutes tu estadía en la tienda",
//     timer: 2000
//   });
// }

// function rechazado() {
//   Swal.fire({
//     icon: "error",
//     title: "Oops...Todavía no es momento de ingresar",
//     text: "En cuanto cumplas 18 te esperamos!!",
//   }).then(() => {
//     console.log("el usuario no puede entrar");
//     setTimeout(() => {
//       controlDeIngreso()
//     },500)
//   });
// }

// Formulario de Registro

var form = document.getElementById("my-form");

form.addEventListener("submit", handleSubmit);

export async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Bienvenido/a! Gracias Por Suscribirte!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! Hubó un problema para enviar tus datos";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! Hubó un problema para enviar tus datos";
    });
}

// FUNCIONES DEL CATALOGO 

// Filtro de Productos 

