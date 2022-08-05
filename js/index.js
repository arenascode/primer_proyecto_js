// Control de Ingreso edad

// Variables

let edad;

// funciones
// function controlDeIngreso() {
//   let edad = parseInt(prompt("Qué Edad Tienes?"));

//   edad >= 18 ? bienvenido() : rechazado()
// }
// controlDeIngreso();

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
//   });
//   console.log("el usuario no puede entrar");
//   controlDeIngreso();
// }
// // Formulario de Registro

// let email = document.getElementById("email");
// let nombreApellido = document.getElementById("nombreApellido");

// let suscripcion = document.getElementById("mensajeJS");
// let notificacionSuscrito;

// let user;
// let userStorage = sessionStorage.getItem("nombreApellido");


//   function (e) {
//   e.preventDefault();
//   if (
//     nombreApellido.value == null ||
//     nombreApellido.value == "" ||
//     email.value == null ||
//     email.value == ""
//   ) {
//     console.log("Faltan Datos");
//     alert("Completa todos los campos para recibir nuestras novedades");
//   } else {
//     notificacionSuscrito = document.createElement("div");
//     notificacionSuscrito.innerHTML =
//       "<p>Bienvenido/a nuestro newsletter " +
//       nombreApellido.value +
//       ", Gracias por tu suscripción.</p>";

//     suscripcion.appendChild(notificacionSuscrito);
//     user = userStorage;
//     alert(
//       "Ahora vas a recibir nuestras novedades pero no te preocupes que no nos volveremos spam"
//     );
//     sessionStorage.setItem("nombreApellido", nombreApellido);
//   }
// });

var form = document.getElementById("my-form");

async function handleSubmit(event) {
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
form.addEventListener("submit", handleSubmit);
