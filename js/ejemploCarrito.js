// Constructor de objetos para modelar los productos del carrito
class Producto {
  constructor(id, nombre, imagen, precio) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.precio = precio;
  }
}

// Cargamos los datos de los productos en el array stock
const stock = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 200,
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 100,
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 250,
  },
  {
    id: 4,
    nombre: "Producto 4",
    precio: 400,
  },
  {
    id: 5,
    nombre: "Producto 5",
    precio: 300,
  },
  {
    id: 6,
    nombre: "Producto 6",
    precio: 100,
  },
];

function mostrarStock() {
  // En este ciclo generamos una fila de tres tarjetas de productos
  for (let i = 0; i < stock.length; i++) {
    let tarjeta = document.createElement("div");
    tarjeta.setAttribute("class", "card col-4");
    tarjeta.innerHTML = `
              <div class="card-body">
                  <h4 class="card-title">${stock[i].nombre}</h4>
                  <p class="card-text">Precio $${stock[i].precio}</p>
                  <button 
                      class="btn btn-primary" 
                      data-id=${stock[i].id}
                      data-img=
                      data-nombre=${stock[i].nombre.replaceAll(
                        " ",
                        "_"
                      )}
                      data-precio=${stock[i].precio} 
                      onclick="agregarProducto(event)"
                  >Comprar</button>
              </div>
              `;
    // Enviamos cada tarjeta al HTML
    document.querySelector("#stock").appendChild(tarjeta);
  }
}

/////// Creamos el carrito /////////////

let carrito = [];

// Si hay carrito en el localStorage lo cargamos y lo mostramos
if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  mostrarCarrito();
}

// Creamos la función para la vista del carrito en el HTML
function mostrarCarrito() {
  let acumuladorCarritoHTML = ``;

  for (let i = 0; i < carrito.length; i++) {
    let template = `
        <div class="card" style="width:200px">
            <div class="card-body">
                <h4 class="card-title">${carrito[i].nombre.replaceAll(
                  "_",
                  " "
                )}</h4> <!--Recuperamos los espacios en blanco-->
                <p class="card-text">Cantidad: ${carrito[i].cantidad}</p>
                <p class="card-text">Precio $${
                  carrito[i].precio * carrito[i].cantidad
                }</p>
                <button 
                class="btn btn-danger"  
                onclick="eliminarProducto('${carrito[i].id}')"
                >Eliminar</button>
            </div>
        </div>
        `;

    acumuladorCarritoHTML += template;
  }

  document.querySelector("#carrito").innerHTML = acumuladorCarritoHTML;
  // Guardamos el estado del carrito en el localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Función para agregar productos al carrito
function agregarProducto(event) {
  console.log("probando boton");
  let encontrado = carrito.findIndex(
    (item) => item.id == event.target.dataset.id
  );
  if (encontrado == -1) {
    let productoElegido = new Producto(
      event.target.dataset.id,
      event.target.dataset.nombre,
      event.target.dataset.imagen,
      event.target.dataset.precio
    );
    productoElegido.cantidad = 1;
    carrito.push(productoElegido);
  } else {
    carrito[encontrado].cantidad += 1;
  }
  mostrarCarrito();
  actualizarTotal();
}
// Función para eliminar un producto del carrito
function eliminarProducto(id) {
  let encontrado = carrito.findIndex((item) => item.id == id);
  carrito.splice(encontrado, 1);
  mostrarCarrito();
  actualizarTotal();
}

// Función para vaciar el carrito
function vaciarCarrito() {
  carrito = [];
  mostrarCarrito();
  actualizarTotal();
}

// Función para actualizar el total del carrito
function actualizarTotal() {
  let total = 0;
  carrito.forEach((item) => (total += item.cantidad * item.precio));
  document.querySelector("#total").innerHTML = "$" + total;
}

// Llamamos la función que renderiza los productos en stock para generar la vista
mostrarStock();

{/* <div  style="max-width: 100px;">
    <img src="${variedadCarrito.foto}" class="img-fluid rounded-start" alt="...">
  <div class="card-body">
    <h5 class="card-title">${variedadCarrito.nombre}</h5>
    <h6><strong>Banco:</strong> ${variedadCarrito.banco}</h6>
    <p class="card-text fw-normal"> <strong>Precio:</strong> $${variedadCarrito.precio}</p>
    
    <button data-id="${variedadCarrito.id}" type="button" class="btnCarrito btn btn-secondary" onclick="eliminarProductoCarrito(${variedadCarrito.id})"> Eliminar </button>
  </div>
</div> */}
