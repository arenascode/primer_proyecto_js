// Control de Ingreso edad

import { controlDeIngreso } from './funciones.js'

// controlDeIngreso();

// Formulario de Registro

import { handleSubmit } from './funciones.js'

var form = document.getElementById("my-form");

form.addEventListener("submit", handleSubmit);

// Ultimos Ingresos 

import { stockVariedades } from './stock.js';

console.log(stockVariedades);
stockVariedades.reverse();

let containerUltimosIngresos = document.getElementById("ultimosIngresos");
console.log(containerUltimosIngresos);

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
    <p class="card-text fw-normal"> <strong>Precio:</strong> $${ultimo.precio
        }
    <button data-id=${ultimo.id} data-nombre=${ultimo.nombre.replaceAll(
          " ",
          "_"
        )}
    data-img=${ultimo.foto} data-precio=${ultimo.precio
        } type="button" class="btnCarrito btn btn-success" onclick="agregarProductoCarrito(event)"> Agregar Al Carrito </button>
  </div>
</div>`;
      containerUltimosIngresos.appendChild(cardUltimoIngreso);
    })
  };
ultimosIngresos();