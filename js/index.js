// Control de Ingreso edad

// Variables

// let edad = 0;

// // funciones
// function controlDeIngreso() {
//   let edad = parseInt(prompt("Qué Edad Tienes?"));
//   if (edad >= 18) {
//     console.log("El usuario puede entrar");
//     alert("Bienvenido/a, Esperamos distrutes tu estadía en la tienda");
//   } else if (edad < 18) {
//     console.log("el usuario no puede entrar");
//     alert(
//       "Todavía no es momento de ingresar. Pero en cuanto cumplas 18 te esperamos!"
//     );
//     controlDeIngreso();
//   } else {
//     controlDeIngreso();
//   }
// }

// controlDeIngreso();

// // Simulador de Compra

// Stock de Productos

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
const indu_kush = new Producto("Indu Kush", "Dinafem", "Indica", 200, false);
const citrus_skunk = new Producto(
  "Citrus Skunk",
  "Shaman Genetics",
  "Sativa",
  250,
  false
);
const jack_herer = new Producto(
  "Jack Herer",
  "Sensi Seeds",
  "Hibrida",
  250,
  false
);
const moby_dick = new Producto("Moby Dick", "Dinafem", "Hibrida", 250, false);
const girl_scout_cookies = new Producto(
  "Girl Scout Cookies",
  "Sensi Seeds",
  "Hibrida",
  250,
  false
);
const gorila_glue = new Producto(
  "Gorila Glue #4",
  "Sensi Seeds",
  "Hibrida",
  250,
  false
);
const skunk_1 = new Producto("Skunk #1", "Sensi Seeds", "Hibrida", 250, false);
const purple_kush = new Producto(
  "Purple Kush",
  "Sensi Seeds",
  "Hibrida",
  250,
  false
);
const red_poison = new Producto(
  "Red Poison",
  "Sweet Seeds",
  "Hibrida",
  250,
  false
);
const gelato = new Producto("Gelato", "BSF Seeds", "Hibrida", 250, false);

stockVariedades.push(
  indu_kush,
  citrus_skunk,
  jack_herer,
  moby_dick,
  girl_scout_cookies,
  gorila_glue,
  skunk_1,
  purple_kush,
  red_poison,
  gelato
);

// VARIABLES

let descuento = 0.1;
let costo_envio = 500;
let suma_total = 0;
let cant_productos = 0;
let confirmacionEnvio;

let variedad_elegida;

let subtotal_indu_kush;
let subtotal_citrus_skunk;
let subtotal_jack_herer;
let subtotal_moby_dick;
let subtotal_girl_scout_cookies;
let subtotal_gorila_glue;
let subtotal_skunk_1;
let subtotal_purple_kush;
let subtotal_red_poison;
let subtotal_gelato;

function procesoVenta() {
  variedad_elegida = prompt("Qué variedad elegiste?").toLowerCase();
  console.log("Variedad Elegida: " + variedad_elegida);
  cant_productos = parseInt(prompt("Cuantas semillas vas a llevar?"));
  console.log("Cantidad de semillas: " + cant_productos);

  switch (variedad_elegida) {
    case "indu kush":
      subtotal_indu_kush = indu_kush.precio * cant_productos;
      console.log("El Subtotal es: " + subtotal_indu_kush);
      alert("El subtototal de tu compra es: " + subtotal_indu_kush);
      confirmacionEnvio = prompt(
        "deseas el envío a tu casa? Si/No"
      ).toLowerCase();
      console.log(confirmacionEnvio);
      if (confirmacionEnvio == "si") {
        alert("El Costo De Envío es: " + costo_envio);
        suma_total = subtotal_indu_kush + costo_envio;
        alert("El costo de tus semillas + envío es de: " + suma_total);
        console.log(" Costo total + envío es de $ " + suma_total);
      } else {
        console.log("No desea el envío");
        alert(
          `El total de tu compra es ${subtotal_indu_kush}. Esperamos tu retiro en la tienda`
        );
      }
      break;
    case "citrus skunk":
      subtotal_citrus_skunk = citrus_skunk.precio * cant_productos;
      confirmacionEnvio = prompt(
        "deseas el envío a tu casa? Si/No"
      ).toLowerCase();
      if (confirmacionEnvio == "si") {
        alert("El Costo De Envío es: " + costo_envio);
        suma_total = subtotal_citrus_skunk + costo_envio;
        alert("El costo total + envío es de: " + suma_total);
        console.log(" Costo total + envío es de $" + suma_total);
      } else {
        console.log("No desea el envío");
        alert(
          `El total de tu compra es ${subtotal_citrus_skunk}. Esperamos tu retiro en la tienda`
        );
      }
      break;
    case "jack herer":
      subtotal_jack_herer = jack_herer.precio * cant_productos;
      console.log("El Subtotal es: " + subtotal_jack_herer);
      alert("El subtototal de tu compra es: " + subtotal_jack_herer);
      confirmacionEnvio = prompt(
        "deseas el envío a tu casa? Si/No"
      ).toLowerCase();
      console.log(confirmacionEnvio);
      if (confirmacionEnvio == "si") {
        alert("El Costo De Envío es: " + costo_envio);
        suma_total = subtotal_jack_herer + costo_envio;
        alert("El costo de tus semillas + envío es de: " + suma_total);
        console.log(" Costo total + envío es de $ " + suma_total);
      } else {
        console.log("No desea el envío");
        alert(
          `El total de tu compra es ${subtotal_jack_herer}. Esperamos tu retiro en la tienda`
        );
      }
      break;
    default:
      console.log("No eligió ninguna variedad");
      break;
  }
}
procesoVenta();
