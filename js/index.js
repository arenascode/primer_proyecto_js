// // Control de Ingreso edad

// // Variables

// let edad = 0;

// // funciones
// function controlDeIngreso() {
//   let edad = parseInt(prompt("Qué Edad Tienes?"));
//   if (edad >= 18) {
//     console.log("El usuario puede entrar");
//     Swal.fire("Bienvenido/a!", "Esperamos distrutes tu estadía en la tienda", "success");
//   } else if (edad < 18) {
//     console.log("el usuario no puede entrar");
//     Swal.fire({
//       icon: "error",
//       title: "Oops...Todavía no es momento de ingresar",
//       text: "En cuanto cumplas 18 te esperamos!!",
//     });
//   } else {
//     controlDeIngreso();
//   }
// }

// controlDeIngreso();


// // Formulario de Registro

// let email = document.getElementById("email");
// let nombreApellido = document.getElementById("nombreApellido");

// let suscripcion = document.getElementById("mensajeJS");
// let notificacionSuscrito;

// let user;
// let userStorage = sessionStorage.getItem("nombreApellido");

// let formulario = document.getElementById("Formulario");
// formulario.addEventListener("submit", function (e) {
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
