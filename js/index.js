// Control de Ingreso edad

// import { controlDeIngreso } from './funciones.js'

// controlDeIngreso();

const inputOptions = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      "puedesIngresar": "Si",
      "accesoDenegado": "No",
    })
  }, 1000);
});




const { value: color } = await Swal.fire({
  title: "Tienes más de 18 años?",
  icon: "question",
  input: "radio",
  allowEscapeKey: false,
  allowOutsideClick: false,
  allowEnterKey: false,
  confirmButtonColor: "#42893c",
  inputOptions: inputOptions,
  inputValidator: (value) => {
    switch (value) {
      case null:
        return "Selecciona una Opción!";
        break;
      case "accesoDenegado":
        return "Tienes que ser mayor de edad para ingresar";
    }
  },
});
console.log(color);

if (color === "puedesIngresar") {
  console.log("el usuario puede entrar");
  Swal.fire({
    html: `Bienvenido/a nuestra tienda. Esperamos disfutes tu estadía`,
    confirmButtonColor: "#42893c",
    timer: 3000,
  });
 
} else {
  console.log("el usuario seleccionó No");
  Swal.fire({ html: `Te Esperamos cuando cumplas 18 años!` });
}

// Formulario de Registro

import { handleSubmit } from './funciones.js'

var form = document.getElementById("my-form");

form.addEventListener("submit", handleSubmit);

// Ultimos Ingresos 

import { stockVariedades } from './stock.js';

stockVariedades.reverse();

let containerUltimosIngresos = document.getElementById("ultimosIngresos");

function ultimosIngresos() {
  stockVariedades.length = 4;
  console.log(stockVariedades);
    stockVariedades.forEach((ultimo) => {
      let cardUltimoIngreso = document.createElement("div");
      cardUltimoIngreso.setAttribute("class", "card cardVariedad");
      cardUltimoIngreso.innerHTML = `<div  style="width: 14rem;">
  <img src="${ultimo.foto}" class="card-img-top img-fluid" alt="...">
  <div class="card-body">
    <h5 class="card-title">${ultimo.nombre}</h5>
    <h6><strong>Banco:</strong> ${ultimo.banco}</h6>
    <p class="card-text fw-normal"> <strong>Precio:</strong> $${ultimo.precio}
    <a href="./pages/catalogo.html" data-id=${
      ultimo.id
    } data-nombre=${ultimo.nombre.replaceAll(" ", "_")}
    data-img=${ultimo.foto} data-precio=${
        ultimo.precio
      } type="button" class="btnCarrito btn btn-success">Ir al Catalogo</a>
  </div>
</div>`;
      containerUltimosIngresos.appendChild(cardUltimoIngreso);
    })
  };
ultimosIngresos();