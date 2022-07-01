// Control de Ingreso edad

function controlDeIngreso() {
  let edad = parseInt(prompt("Qué Edad Tienes?"));
  if (edad >= 18) {
    console.log("El usuario puede entrar");
    alert("Bienvenido/a, Esperamos distrutes tu estadía en la tienda");
  } else if (edad < 18) {
    console.log("el usuario no puede entrar");
    alert(
      "Todavía no es momento de ingresar. Pero en cuanto cumplas 18 te esperamos!"
    );
    controlDeIngreso();
  } else {
    controlDeIngreso();
  }
}

controlDeIngreso();

// Simulador de Compra

// Productos
class Producto {
  constructor(nombre, banco, variedad, precio, vendido) {
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
const indu_kush = new Producto("Indu Kush", "Dinafem", "Indica", 200, false);
console.log(indu_kush);
const citrus_skunk = new Producto(
  "Citrus Skunk",
  "Shaman Genetics",
  "Sativa",
  250,
  false
);
console.log(citrus_skunk);

let descuento = 0.1;
let costo_envio = 500;
let suma_total = 0;
let cant_productos = 0;

let variedad_elegida;
let subtotal_indu_kush;
let subtotal_citrus_skunk;

function procesoVenta() {
  variedad_elegida = prompt("Qué variedad elegiste?").toLowerCase();
  console.log("Variedad Elegida: " + variedad_elegida);
  cant_productos = parseInt(prompt("Cuantas semillas vas a llevar?"));
  console.log("Cantidad de semillas: " + cant_productos);
  switch (variedad_elegida) {
    case "indu kush":
      subtotal_indu_kush = indu_kush.precio * cant_productos;
      console.log("El Subtotal es: " + subtotal_indu_kush);
      alert("El subtototal sin envío es: " + subtotal_indu_kush);
      alert("El Costo De Envío es: " + costo_envio);
      suma_total = subtotal_indu_kush + costo_envio;
      alert("El costo total + envío es de: " + suma_total);
      console.log(" Costo total + envío es de $" + suma_total);
      break;
    case "citrus skunk":
      subtotal_citrus_skunk = citrus_skunk.precio * cant_productos;
      console.log("el subtotal es $" + subtotal_citrus_skunk);
      suma_total = subtotal_citrus_skunk + costo_envio;
      alert("El costo total + envío es de: " + suma_total);
      console.log(" Costo total + envío es de $" + suma_total);
      break;
    default:
      console.log("No eligió ninguna variedad");
      break;
  }
}
procesoVenta();
