export const stockVariedades = [];

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
