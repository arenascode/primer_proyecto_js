// Creando el stock mediante objetos en Array
const stockVariedades = [];

class Producto {
  constructor(id, nombre, banco, variedad, precio, foto, descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.banco = banco;
    this.variedad = variedad;
    this.precio = parseFloat(precio);
    this.foto = foto;
    this.descripcion = descripcion;
  }
}
stockVariedades.push(
  new Producto(
    1,
    "Indu Kush",
    "Sensi Seeds",
    "Indica",
    5000,
    "../images/catalogo/indica/hinduKush.jpeg",
    "Es todo lo que puede desear un aficionado a las indicas puras. Lo que hace a la Hindu Kush tan popular, además de su tentador aroma dulce y terroso con notas a sándalo y pino, es su particular efecto profundamente relajante."
  )
);
stockVariedades.push(
  new Producto(
    2,
    "Ice",
    "Royal Queen Seeds",
    "Indica",
    4500,
    "../images/catalogo/indica/ice.jpeg",
    "¿Qué pasa cuando cruzas una afghana pura con una Northern Lights y una Skunk? Que obtienes la Indica Crystal Extreme (también conocida como ICE), una planta totalmente cubierta de glándulas de resina."
  )
);
stockVariedades.push(
  new Producto(
    3,
    "Chocolope",
    "DNA Genetics",
    "Sativa",
    4300,
    "../images/catalogo/sativa/chocolope.jpeg",
    "El aroma y el sabor de Chocolope son intensos y ricos, con notas profundas a chocolate. Su efecto estimulante, enérgico y eufórico."
  )
);
stockVariedades.push(
  new Producto(
    4,
    "Blue Dream",
    "Humboldt Seeds",
    "Sativa",
    3800,
    "../images/catalogo/sativa/blue-dream.jpeg",
    "Blue Dream es un híbrido de marihuana cuyo aroma recuerda mucho a Haze, a cítricos y a cedro. Su sabor tiene un intenso gusto a limón, pino, incienso, fruta dulce y Haze. Es una variedad de cannabis que produce un efecto potente y duradero con una sensación cerebral estimulante y clara."
  )
);
stockVariedades.push(
  new Producto(
    5,
    "Diesel",
    "Dinafem",
    "Sativa",
    4600,
    "../images/catalogo/sativa/diesel.jpeg",
    "Diesel presenta una amalgama de aromas y de sabores intensos y dispares, y es capaz de poner los sentidos a pleno rendimiento. Inicialmente desprende un olor a gasóleo, dulce, intenso y complejo, y en boca aparecen notas a mandarina, a limón, a lima y a frutos exóticos, acompañadas de un regusto a diésel.¡Algo fuera de lo común que todo el mundo debería probar!"
  )
);
stockVariedades.push(
  new Producto(
    6,
    "OG Kush",
    "Dinafem",
    "Indica",
    4700,
    "../images/catalogo/indica/og-kush.jpeg",
    "Es una de las variedades de cannabis más demandadas de California y, por ende, del mundo, y fue elegida como la mejor variedad de cannabis de todos los tiempos por la biblia cannábica, High Times. Una de las razones por las que todo el mundo habla de OG Kush es por su increíble sabor. Podríamos resumirlo como una explosiva mezcla de intenso olor a diesel, frutas del bosque y cítricos."
  )
);
stockVariedades.push(
  new Producto(
    7,
    "Green Posion",
    "Sweet Seeds",
    "Indica",
    4000,
    "../images/catalogo/indica/green-poison.jpeg",
    "Green Poison desarrolla un espectacular planta de marihuana de crecimiento rápido y vigoroso, con ramas largas y flexibles sobre las que predomina un gran cogollo central.El aroma y sabor de esta variedad es exquisito, muy intenso, dulce y afrutado."
  )
);
stockVariedades.push(
  new Producto(
    8,
    "Amnesia",
    "Dinafem",
    "Autofloreciente",
    4800,
    "../images/catalogo/autoflorecientes/amnesia-auto.jpeg",
    "Las semillas de cannabis de Amnesia Auto desarrollan plantas de apariencia absolutamente sativa. Altas, esbeltas y vigorosas, con amplia distancia internodal y elegantes hojas de finos foliolos serrados. tiene un marcado y delicioso aroma a Haze, limón, incienso y pino."
  )
);
stockVariedades.push(
  new Producto(
    9,
    "Cookies",
    "Dinafem",
    "Autofloreciente",
    4600,
    "../images/catalogo/autoflorecientes/cookies-auto.jpeg",
    "En el caso de esta versión autofloreciente se repite el patrón de esa famosa Cookies: tradicional Kush de sello californiano, que parece recién salida del horno, fruto de nuevos aromas reposteros. Con esta innovación en el aroma cannábico más clásico se ha conseguido que el sabor de Cookies Autoflowering sea algo excepcional."
  )
);
stockVariedades.push(
  new Producto(
    10,
    "Gorila Girl",
    "Sweet Seeds",
    "Autofloreciente",
    4700,
    "../images/catalogo/autoflorecientes/gorillaGirl-auto.jpeg",
    "Es una semilla de cannabis autofloreciente que responde a las exigencias de quienes cultivan en climas fríos, de veranos cortos. La versión automática de la potente Gorilla inyecta fuerza y robustez a su predecesora feminizada, fruto de su herencia Ruderalis, y es también más rápida, dada la velocidad de floración de las autos."
  )
);
stockVariedades.push(
  new Producto(
    11,
    "Blue Cheese",
    "Dinafem",
    "Autofloreciente",
    4500,
    "../images/catalogo/autoflorecientes/blueCheese-auto.jpeg",
    "Las semillas de marihuana Blue Cheese Autoflowering son un auténtico regalo para las papilas gustativas, una variedad que destaca por su delicioso sabor y que además resulta una opción fácil y rápida para cultivadores noveles gracias a las ventajas de su genética autofloreciente."
  )
);
stockVariedades.push(
  new Producto(
    12,
    "Cheese",
    "Dinafem",
    "CBD",
    5300,
    "../images/catalogo/cbd/cheese-cbd.jpeg",
    "Las semillas de marihuana Cheese CBD son la prueba de que cuando se cuenta con talento y genéticas de élite, no hay combinación imposible. Fruto del cruce entre una Cheese y una Pure CBD, Cheese CBD echa por tierra el mito de que las variedades ricas en cannabidiol siempre saben a naranja."
  )
);
stockVariedades.push(
  new Producto(
    13,
    "Bubba Kush",
    "Sensi Seeds",
    "CBD",
    5400,
    "../images/catalogo/cbd/bubbaKush-cbd.jpeg",
    "Bubba Kush CBD marida las bondades tradicionales de Bubba Kush con las ventajas medicinales del cannabidiol. Si Bubba Kush es la reina índica por excelencia: guapa, compacta y narcótica; esta genética es la planta capaz de mantener intacta la belleza y los sabores de la reina, disminuyendo su potencia."
  )
);
stockVariedades.push(
  new Producto(
    14,
    "Critical Mass",
    "Dinafem",
    "CBD",
    5500,
    "../images/catalogo/cbd/euphoria-cbd.jpeg",
    "Critical Mass CBD es una semilla de marihuana feminizada de dominancia índica de Dinafem Seeds diseñada para aquellos que no tienen mucho espacio ni demasiado tiempo para cultivar cannabis.Posee un aroma y un sabor muy intensos y afrutados. Percibimos notas claras a limón, a madera de pino y a maderas exóticas."
  )
);
stockVariedades.push(
  new Producto(
    15,
    "Cream Caramel",
    "Sweet Seeds",
    "CBD",
    5400,
    "../images/catalogo/cbd/cream-caramel-cbd.jpeg",
    "Variedad con una estructura principalmente de planta índica, un gran cogollo principal y buena ramificación de las ramas secundarias. Posee un tallo fuerte y ramas secundarias largas y flexibles. Los aromas y sabores de esta variedad son dulces y acaramelados con un fondo de tonos terrosos y pinceladas frescas de ciprés y cítricos."
  )
);
stockVariedades.push(
  new Producto(
    16,
    "Jack Herer",
    "Sensi Seeds",
    "Sativa",
    5000,
    "../images/catalogo/sativa/jack-herer.jpeg",
    "¿Estás listo para recargar totalmente tu energía con la potencia de un híbrido? Esta marihuana proporciona un subidón cerebral estratosférico y un colocón corporal tremendo.Posee una compleja gama aromática, con notas intensas, sabrosas y terrosas, que solo se desarrollan tras el cosechado."
  )
);
// Mostrar todos los productos
let catalogoVariedadFiltrada;
let cardVariedad;

catalogoVariedadFiltrada = document.getElementById("variedadCatalogo");

function mostrarCatalogo() {
  stockVariedades.forEach((variedad) => {
    cardVariedad = document.createElement("div");
    cardVariedad.setAttribute("class", "card cardVariedad col-2");
    cardVariedad.innerHTML = `<div  style="width: 15rem;">
  <img src="${variedad.foto}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${variedad.nombre}</h5>
    <h6><strong>Banco:</strong> ${variedad.banco}</h6>
    <p class="card-text fw-normal"> <strong>Precio:</strong> $${
      variedad.precio
    }</p>
    <p class="card-text fw-normal">${variedad.descripcion}</p>
    <button data-id=${variedad.id} data-nombre=${variedad.nombre.replaceAll(
      " ",
      "_"
    )}
    data-img=${variedad.foto} data-precio=${
      variedad.precio
    } type="button" class="btnCarrito btn btn-secondary " onclick="agregarProductoCarrito(event)"> Agregar Al Carrito </button>
  </div>
</div>`;
    catalogoVariedadFiltrada.appendChild(cardVariedad);
  });
}
mostrarCatalogo();
// Filtro de Productos
// Indica
let filtroIndica = document.getElementById("filtroIndica");
filtroIndica.oninput = () => {
  mostrarIndica();
};

let seleccionIndica;

function mostrarIndica() {
  // Borrar carrito para dejar solo la selección Indica
  seleccionIndica = stockVariedades.filter((el) => el.variedad == "Indica");
  catalogoVariedadFiltrada.innerHTML = "";
  seleccionIndica.forEach((indica) => {
    catalogoVariedadFiltrada = document.getElementById("variedadCatalogo");
    cardVariedad = document.createElement("div");
    cardVariedad.setAttribute("class", "card cardVariedad col-2");
    cardVariedad.innerHTML = `<div  style="width: 13rem;">
  <img src="${indica.foto}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${indica.nombre}</h5>
    <h6><strong>Banco:</strong> ${indica.banco}</h6>
    <p class="card-text fw-normal"> <strong>Precio:</strong> $${
      indica.precio
    }</p>
    <p class="card-text fw-normal">${indica.descripcion}</p>
    <button data-id=${indica.id} data-nombre=${indica.nombre.replaceAll(
      " ",
      "_"
    )} data-img=${indica.foto} data-precio=${
      indica.precio
    } type="button" class="btn btn-secondary" onclick="agregarProductoCarrito(event)"> Agregar Al Carrito </button>
  </div>
</div>`;
    catalogoVariedadFiltrada.appendChild(cardVariedad);
    console.log(seleccionIndica);
  });
}

// // Filtro Sativa

let seleccionSativa;

let filtroSativa = document.getElementById("filtroSativa");
filtroSativa.oninput = () => {
  mostrarSativa();
};

function mostrarSativa() {
  seleccionSativa = stockVariedades.filter((el) => el.variedad == "Sativa");
  catalogoVariedadFiltrada.innerHTML = "";
  seleccionSativa.forEach((sativa) => {
    catalogoVariedadFiltrada = document.getElementById("variedadCatalogo");
    cardVariedad = document.createElement("div");
    cardVariedad.setAttribute("class", "card col-2 cardVariedad");
    cardVariedad.innerHTML = `<div  style="width: 13rem;">
   <img src="${sativa.foto}" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${sativa.nombre}</h5>
     <h6><strong>Banco:</strong> ${sativa.banco}</h6>
     <p class="card-text fw-normal"> <strong>Precio:</strong> $${
       sativa.precio
     }</p>
     <p class="card-text fw-normal">${sativa.descripcion}</p>
     <button data-id=${sativa.id} data-nombre=${sativa.nombre.replaceAll(
      " ",
      "_"
    )} data-img=${sativa.foto} data-precio=${
      sativa.precio
    } type="button" class="btn btn-secondary" onclick="agregarProductoCarrito(event)"> Agregar Al Carrito </button>
   </div>
 </div>`;
    catalogoVariedadFiltrada.appendChild(cardVariedad);
    console.log(seleccionSativa);
  });
}

// Filtro CBD

let filtroCbd = document.getElementById("filtroCbd");
filtroCbd.oninput = () => {
  mostrarCbd();
};

let seleccionCbd;

function mostrarCbd() {
  seleccionCbd = stockVariedades.filter((el) => el.variedad == "CBD");
  catalogoVariedadFiltrada.innerHTML = "";
  seleccionCbd.forEach((cbd) => {
    catalogoVariedadFiltrada = document.getElementById("variedadCatalogo");
    cardVariedad = document.createElement("div");
    cardVariedad.setAttribute("class", "card col-2 cardVariedad");
    cardVariedad.innerHTML = `<div  style="width: 13rem;">
   <img src="${cbd.foto}" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${cbd.nombre}</h5>
     <h6><strong>Banco:</strong> ${cbd.banco}</h6>
     <p class="card-text fw-normal"> <strong>Precio:</strong> $${cbd.precio}</p>
     <p class="card-text fw-normal">${cbd.descripcion}</p>
     <button data-id=${cbd.id} data-nombre=${cbd.nombre.replaceAll(
      " ",
      "_"
    )} data-img=${cbd.foto} data-precio=${
      cbd.precio
    } type="button" class="btn btn-secondary" onclick="agregarProductoCarrito(event)"> Agregar Al Carrito </button>
   </div>
 </div>`;
    catalogoVariedadFiltrada.appendChild(cardVariedad);
    console.log(cbd);
  });
}

// Filtro Autoflorecientes
let seleccionAutos;

let filtroAutos = document.getElementById("filtroAutoflorecientes");

filtroAutos.oninput = () => {
  mostrarAutos();
};

function mostrarAutos() {
  seleccionAutos = stockVariedades.filter(
    (el) => el.variedad == "Autofloreciente"
  );
  catalogoVariedadFiltrada.innerHTML = "";
  seleccionAutos.forEach((auto) => {
    catalogoVariedadFiltrada = document.getElementById("variedadCatalogo");
    cardVariedad = document.createElement("div");
    cardVariedad.setAttribute("class", "card col-2 cardVariedad");
    cardVariedad.innerHTML = `<div  style="width: 13rem;">
   <img src="${auto.foto}" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${auto.nombre}</h5>
     <h6><strong>Banco:</strong> ${auto.banco}</h6>
     <p class="card-text fw-normal"> <strong>Precio:</strong> $${
       auto.precio
     }</p>
     <p class="card-text fw-normal">${auto.descripcion}</p>
     <button data-id=${auto.id} data-nombre=${auto.nombre.replaceAll(
      " ",
      "_"
    )} data-img=${auto.foto} data-precio=${
      auto.precio
    } type="button" class="btn btn-secondary" onclick="agregarProductoCarrito(event)"> Agregar Al Carrito </button>
   </div>
 </div>`;
    catalogoVariedadFiltrada.appendChild(cardVariedad);
    console.log(auto);
  });
}

// Borrar Filtro

let botonBorrarFiltro = document.getElementById("limpiarFiltro");

botonBorrarFiltro.addEventListener("click", function (e) {
  e.preventDefault();
  if (botonBorrarFiltro.value == "Limpiar Filtro") {
    catalogoVariedadFiltrada.innerHTML = "";
    stockVariedades.forEach((mostrarCarrito) => {
      cardVariedad = document.createElement("div");
      cardVariedad.setAttribute("class", "card cardVariedad col-2");
      cardVariedad.innerHTML = `<div  style="width: 13rem;">
  <img src="${mostrarCarrito.foto}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${mostrarCarrito.nombre}</h5>
    <h6><strong>Banco:</strong> ${mostrarCarrito.banco}</h6>
    <p class="card-text fw-normal"> <strong>Precio:</strong> $${
      mostrarCarrito.precio
    }</p>
    <p class="card-text fw-normal">${mostrarCarrito.descripcion}</p>
    <button data-id=${
      mostrarCarrito.id
    } data-nombre=${mostrarCarrito.nombre.replaceAll(" ", "_")} data-img=${
        mostrarCarrito.foto
      } data-precio=${
        mostrarCarrito.precio
      } type="button" class="btn btn-secondary" onclick="agregarProductoCarrito(event)"> Agregar Al Carrito </button>
  </div>
</div>`;
      catalogoVariedadFiltrada.appendChild(cardVariedad);
    });
    console.log("va a borrar el contenido");
    document.getElementById("formFiltro").reset();
  } else {
    console.log("No va a borrar nada");
  }
});

// Agregar los productos al Carrito

let carrito = [];
let total = 0;
let subtotal = 0;
let costoEnvio = 500;

class constructorVariedadCarrito {
  constructor(id, nombre, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
  }
}
let containerCarrito = document.getElementById("containerCarrito");
// Guardemos los productos en el carrito primero

if (
  (localStorage.getItem("carrito"),
  localStorage.getItem("subtotal"),
  localStorage.getItem("costoEnvio"),
  localStorage.getItem("total"))
) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  subtotal = JSON.parse(localStorage.getItem("subtotal"));
  costoEnvio = JSON.parse(localStorage.getItem("costoEnvio"));
  total = JSON.parse(localStorage.getItem("total"));
  mostrarCarrito();
  actualizarTotal();
}

function agregarProductoCarrito(event) {
  let variedadEncontrada = carrito.findIndex(
    (el) => el.id == event.target.dataset.id
  );
  if (variedadEncontrada == -1) {
    console.log("No existe la variedad en el catalogo, hay que crearla");
    let nuevaCardCarrito = new constructorVariedadCarrito(
      event.target.dataset.id,
      event.target.dataset.nombre,
      event.target.dataset.precio,
      event.target.dataset.img
    );
    nuevaCardCarrito.cantidad = 1;
    carrito.push(nuevaCardCarrito);
  } else {
    
    carrito[variedadEncontrada].cantidad += 1;
  }
  mostrarCarrito();
  actualizarTotal();
}

function mostrarCarrito() {
  containerCarrito.innerHTML = ``;
  carrito.forEach((variedadCarrito) => {
    let cardCarrito = document.createElement("div");
    cardCarrito.setAttribute("class", "card cardCarrito");
    cardCarrito.innerHTML = `<div class="card text-bg-dark" style="max-width: 200px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${
        variedadCarrito.img
      }" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-title">Variedad:  <strong>${variedadCarrito.nombre.replaceAll(
          "_",
          " "
        )}</strong></p>
        <hr>
        <p class="card-text">Precio: <strong>$${
          variedadCarrito.precio
        }</strong></p>
        <p>Cantidad: ${variedadCarrito.cantidad}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button data-id="${
            variedadCarrito.id
          }" type="button" class="btnCarrito btn btn-outline-danger btn-sm" onclick="eliminarProductoCarrito(${
      variedadCarrito.id
    })"> Borrar </button></div>
      </div>
    </div>
  </div>
</div>`;
    containerCarrito.appendChild(cardCarrito);
  });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  localStorage.setItem("subtotal", JSON.stringify(subtotal));
  localStorage.setItem("costoEnvio", JSON.stringify(costoEnvio));
  localStorage.setItem("total", JSON.stringify(total));
}

function eliminarProductoCarrito(id) {
  let idVariedad = carrito.findIndex((item) => item.id == id);
  carrito = JSON.parse(localStorage.getItem("carrito"));
  carrito.splice(idVariedad, 1);
  mostrarCarrito();
  actualizarTotal();
  ultimaVariedad();
}

function vaciarCarrito() {
  carrito = [];
  mostrarCarrito();
  total = 0;
  actualizarTotal();
  document.querySelector("#resumenCompra").innerHTML = ` `;
}

function actualizarTotal() {
  let subtotal = 0;
  carrito.forEach((item) => (subtotal += item.cantidad * item.precio));
  let total = subtotal + costoEnvio;

  document.querySelector(
    "#resumenCompra"
  ).innerHTML = `<h5>Subtotal: $${subtotal} </h5>
  <strong>+</strong>
  <h6>Costo de Envío: $${costoEnvio}</h6>
  <hr>
  Total de tu Compra: <strong>$${total}</strong>
  <a class="btn btn-success " data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" onclick=confirmarCompra()>
      Confirmar Compra
    </a>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Completá tus datos y listo!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onclick="borrarResumen()"></button>
      </div>
      <div class="offcanvas-body">
      <caption>Resumen</caption>
      <table class="table table-sm ">
  <thead>
    <tr>
      <th scope="col">Variedad</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody class="table-group-divider" id="itemCompraFinal">
  </tbody>
</table>
<hr>
<p class="text-end">Costo de Envío: <strong>$${costoEnvio}</strong></p>
<h6 class="text-end">Total = <strong>$${total}</strong></h6>
<div id="containerFormCompra">
<form class="containerFormCompra d-grid gap-2">
    <div class="input-group flex-nowrap input-group-sm">
      <span class="input-group-text" id="addon-wrapping">Nombre Completo: </span>
      <input type="text" class="form-control"  aria-label="nombre" aria-describedby="addon-wrapping" required>
    </div>
    <div class="input-group flex-nowrap input-group-sm">
      <span class="input-group-text " id="addon-wrapping">Whatsapp: </span>
      <input type="number" class="form-control"  aria-label="whatsapp" aria-describedby="addon-wrapping" placeholder="ej: 11 1234 5678" required>
    </div>
    <div class="input-group flex-nowrap input-group-sm">
      <span class="input-group-text" id="addon-wrapping">Mail </span>
      <input type="mail" class="form-control"  aria-label="Mail" aria-describedby="addon-wrapping" placeholder="ej: hola420@gmail.com" required>
    </div>
    <div class="input-group flex-nowrap input-group-sm">
      <span class="input-group-text" id="addon-wrapping">Dirección</span>
      <input type="text" class="form-control"  aria-label="direccion" aria-describedby="addon-wrapping" placeholder="ej: Calle Malabia 2854 5D" required>
    </div>
    <div class="dropdown mt-3 justify-content-md-end">
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="accept" id="flexCheckDefault" required>
  <label class="form-check-label" for="flexCheckDefault">
    Acepto Terminos y Condiciones
  </label>
</div>
</div>
    <button class="btn btn-success" type="submit" value="enviar">
            Confirmar
          </button>
          </form></div>
      </div>
    </div>`;
}

// Eliminar container de Resumen Compra cuando se borra el ultimo producto de forma individual

function ultimaVariedad() {
  if (carrito.length == 0) {
    document.querySelector("#resumenCompra").innerHTML = ` `;
  } else {
    console.log("no ta vacio");
  }
}

function confirmarCompra() {
  carrito.forEach((itemFinal) => {
    let itemFinalTotal = itemFinal.cantidad * itemFinal.precio;
    let containerCompraFinal = document.querySelector("#itemCompraFinal");
    let containerIndividual = document.createElement("tr");
    containerIndividual.innerHTML = `
      <th scope="row">${itemFinal.nombre.replaceAll("_", " ")}</th>
      <td>${itemFinal.cantidad}</td>
      <td>${itemFinal.precio}</td>
      <td>${itemFinalTotal} </td>
      <td></td>`;
    containerCompraFinal.appendChild(containerIndividual);
  });
}

function borrarResumen() {
  document.querySelector("#itemCompraFinal").innerHTML = ` `;
}

const formCompraFinal = document.querySelector(".containerFormCompra");
formCompraFinal.addEventListener("submit", enviarFormCompra);
  
function enviarFormCompra(e) {
  e.preventDefault();
  formCompraFinal.reset();
  Swal.fire({
    title: "Estás seguro?",
    text: "Una vez confirmes no podrás revertir la compra!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#198754",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, Confirmo la Compra!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        "Gracias por tu compra!",
        "En breve nos contactaremos contigo para coordinar tu pedido.",
        "success"
      );
      borrarResumen();
      vaciarCarrito();
    }
  });
  // console.log("Primero probemos si funciona");
}