// Simulador de Compra

const stockVariedades = [];

class Producto {
  constructor(nombre, banco, variedad, precio) {
    this.nombre = nombre;
    this.banco = banco;
    this.variedad = variedad;
    this.precio = parseFloat(precio);
    this.vendido = false;
  }
  vender() {
    this.vendido = true;
  }
}
stockVariedades.push(
  new Producto("Indu Kush", "Dinafem", "Indica", 200, false)
);
stockVariedades.push(
  new Producto("Citrus Skunk", "Shaman Genetics", "Sativa", 250, false)
);
stockVariedades.push(
  new Producto("Jack Herer", "Sensi Seeds", "Hibrida", 250, false)
);
stockVariedades.push(
  new Producto("Moby Dick", "Dinafem", "Hibrida", 250, false)
);

stockVariedades.push(
  new Producto("Girl Scout Cookies", "Sensi Seeds", "Hibrida", 250, false)
);
stockVariedades.push(
  new Producto("Gorila Glue #4", "Sensi Seeds", "Hibrida", 250, false)
);
stockVariedades.push(
  new Producto("Skunk #1", "Sensi Seeds", "Hibrida", 250, false)
);
stockVariedades.push(
  new Producto("Purple Kush", "Sensi Seeds", "Hibrida", 250, false)
);
stockVariedades.push(
  new Producto("Gelato", "BSF Seeds", "Hibrida", 250, false)
);
stockVariedades.push(
  new Producto("Red Poison", "Sweet Seeds", "Hibrida", 250, false)
);

let variedad;
let subtotal;
let variedad_precio;
let seleccionVariedad;
let cant_productos;
let variedad_elegida;
let costo_envio = 500;
let total_compra;

function procesoVenta() {
  seleccionVariedad = document.getElementById("ingresaVariedad");
  console.log("Variedad Elegida: " + seleccionVariedad.value);
  cant_productos = document.getElementById("cantidadSemas");
  console.log("Cantidad de semillas: " + cant_productos.value);

  variedad_elegida = stockVariedades.filter(
    (el) => el.nombre == seleccionVariedad.value
  );
  console.log(variedad_elegida);
  variedad_precio = variedad_elegida.find((el) => el.precio > 0);
  console.log(variedad_precio.precio);
  subtotal = variedad_precio.precio * cant_productos.value;
  console.log(subtotal);
  total_compra = subtotal + costo_envio;
  console.log(total_compra);
  
  let detalleCompra = document.getElementById("detalleCompra");
  let mensajeDetalleCompra = document.createElement("div")
  mensajeDetalleCompra.innerHTML = `<h4>Variedad: ${seleccionVariedad.value}</h4>
  <p>Cantidad de Semillas: ${cant_productos.value}</p>
  <p>subtotal = ${subtotal}</p>
  <p>Costo de Envío = ${costo_envio}</p>
  <p><strong>Total = ${total_compra}
  `
  detalleCompra.appendChild(mensajeDetalleCompra);
}


let confirmarCompra = document.getElementById("formularioCompra")
confirmarCompra.addEventListener("submit", function confirmaCompra(e) {
  e.preventDefault();
  if (seleccionVariedad === null || seleccionVariedad == "") {
    console.log("No seleccionó ninguna variedad");
    alert("selecciona una variedad");
  } else {
    procesoVenta();
  }
}
)
