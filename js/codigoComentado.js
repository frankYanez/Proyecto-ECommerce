// //Productos
// const remeras = "Remeras";
// const pantalones = "Pantalones";
// const zapatillas = "Zapatillas";

// //Ingresa el Producto que Desea
// let productoDeseado = Number(
//   prompt(
//     "Bienvenido! Que producto deseas comprar? \n 1)" +
//       remeras +
//       "\n 2)" +
//       pantalones +
//       "\n 3)Zapatillas"
//   )
// );

// if (productoDeseado == 1) {
//   alert("Escogiste Remeras");
//   remeraElegida();
// } else if (productoDeseado == 2) {
//   alert("Escogiste Pantalones");
//   pantalonElegido();
// } else if (productoDeseado == 3) {
//   alert("Escogiste zapatillas");
//   zapatillaElegida();
// } else if (
//   productoDeseado !== 1 &&
//   productoDeseado !== 2 &&
//   productoDeseado !== 3
// ) {
//   alert("Escoge una opcion valida");
//   productoDeseado = Number(
//     prompt(
//       "Bienvenido! Que producto deseas comprar? \n 1)" +
//         remeras +
//         "\n 2)" +
//         pantalones +
//         "\n 3)Zapatillas"
//     )
//   );
// }

// const compraProducto = alert("Vas a comprar " + productoDeseado);

// //Funcion del Tipo de Remera
// function remeraElegida() {
//   const remeraOverside = "Remera Overside";
//   const remeraLisa = "Remera Lisa";
//   const remeraCuelloRedondo = "Remera Cuello Redondo";

//   let remeraElegida = Number(
//     prompt(
//       "Elige el tipo de remera \n1)" +
//         remeraOverside +
//         " \n2)" +
//         remeraLisa +
//         "\n3)" +
//         remeraCuelloRedondo
//     )
//   );

//   switch (remeraElegida) {
//     case 1:
//       alert("Elegiste: " + remeraOverside);
//       return (remeraElegida = remeraOverside);

//     case 2:
//       alert("Elegiste: " + remeraLisa);
//       return (remeraElegida = remeraLisa);

//     case 3:
//       alert("Elegiste: " + remeraCuelloRedondo);
//       return (remeraElegida = remeraCuelloRedondo);

//     default:
//       while (
//         remeraElegida !== 1 &&
//         remeraElegida !== 2 &&
//         remeraElegida !== 3
//       ) {
//         alert("Escoge una opcion valida");

//         remeraElegida = Number(
//           prompt(
//             "Elige el tipo de remera \n1)" +
//               remeraOverside +
//               " \n2)" +
//               remeraLisa +
//               "\n3)" +
//               remeraCuelloRedondo
//           )
//         );
//         return remeraElegida;
//       }
//       break;
//   }
// }

// //Funcion del tipo de Pantalon
// function pantalonElegido() {
//   const pantalonMom = "Pantalon Mom";
//   const pantalonChino = "Pantalon Chino";
//   const pantalonChupin = "Pantalon Chupin";

//   let pantalonElegido = Number(
//     prompt(
//       "Elige el tipo de pantalon \n1)" +
//         pantalonMom +
//         " \n2)" +
//         pantalonChino +
//         "\n3)" +
//         pantalonChupin
//     )
//   );

//   switch (pantalonElegido) {
//     case 1:
//       alert("Elegiste: " + pantalonMom);
//       return (pantalonElegido = pantalonMom);

//     case 2:
//       alert("Elegiste: " + pantalonChino);
//       return (pantalonElegido = pantalonChino);

//     case 3:
//       alert("Elegiste: " + pantalonChupin);
//       return (pantalonElegido = pantalonChupin);

//     default:
//       while (
//         pantalonElegido !== 1 &&
//         pantalonElegido !== 2 &&
//         pantalonElegido !== 3
//       ) {
//         alert("Escoge una opcion valida");

//         pantalonElegido = Number(
//           prompt(
//             "Elige el tipo de Pantalon \n1)" +
//               pantalonMom +
//               " \n2)" +
//               pantalonChino +
//               "\n3)" +
//               pantalonChupin
//           )
//         );
//         return pantalonElegido;
//       }
//       break;
//   }
// }

// //Funcion del tipo de Zapatilla
// function zapatillaElegida() {
//   const zapatillaNike = "Zapatilla Nike";
//   const zapatillaAdidas = "Zapatilla Adidas";
//   const zapatillaPuma = "zapatilla Puma";

//   let zapatillaElegida = Number(
//     prompt(
//       "Elige el tipo de Zapatillas \n1)" +
//         zapatillaNike +
//         " \n2)" +
//         zapatillaAdidas +
//         "\n3)" +
//         zapatillaPuma
//     )
//   );

//   switch (zapatillaElegida) {
//     case 1:
//       alert("Elegiste: " + zapatillaNike);
//       return (zapatillaElegida = zapatillaNike);

//     case 2:
//       alert("Elegiste: " + zapatillaAdidas);
//       return (zapatillaElegida = zapatillaAdidas);

//     case 3:
//       alert("Elegiste: " + zapatillaPuma);
//       return (zapatillaElegida = zapatillaPuma);

//     default:
//       while (
//         zapatillaElegida !== 1 &&
//         zapatillaElegida !== 2 &&
//         zapatillaElegida !== 3
//       ) {
//         alert("Escoge una opcion valida");

//         pantalonElegido = Number(
//           prompt(
//             "Elige el tipo de Zapatillas \n1)" +
//               zapatillaNike +
//               " \n2)" +
//               zapatillaAdidas +
//               "\n3)" +
//               zapatillaPuma
//           )
//         );
//         return zapatillaElegida;
//       }
//       break;
//   }
// }




// let producto = prompt('ingresa producto')

// const filtrado = (pedido)=>{

//     let stockFiltrado = stockProductos.filter((producto) => {
//         return producto.nombre.toLocaleLowerCase().includes(pedido)
//     })

//     agregarCarrito(stockFiltrado)

// }

// const agregarCarrito = () => {

// }

//PASO#1 (Obtener elemento)

//PASO#2 Recorrer
// for ( const producto of stockProductos) {

//     let div = document.createElement( 'div')

//     div.innerHTML = `<h3>${producto.nombre} \n ${producto.precio}</h3>`

//     container.appendChild(div)
// };


//NUEVO TRABAJO COMPLEMENTARIO

// let ingreso;
// let seguirComprando;
// let carrito = [];
// let filtrados;

// const filtrado = (pedido) => {
//   const stockFiltrado = stockProductos.filter((producto) => {
//     return producto.nombre.toLowerCase().includes(pedido.toLowerCase());
//   });

//   agregarProductoACarrito(stockFiltrado);
// };

// const mostrarCarrito = () => {
//   let carritoString = "";

//   carrito.forEach((producto, index) => {
//     return (carritoString += `${index + 1}. ${producto.nombre} - ${
//       producto.precio
//     }\n`);
//   });

//   alert(`Tu carrito contiene:\n\n${carritoString}`);
// };

// const agregarProductoACarrito = (stockDePedido) => {
//   let filtrados = "";

//   stockDePedido.forEach((producto, index) => {
//     return (filtrados += `${index + 1}. ${producto.nombre} - ${
//       producto.precio
//     }\n`);
//   });

//   let productoSeleccionado = prompt(
//     `Ingresa el producto que deseas agregar de la lista:\n\n ${filtrados}`
//   );

//   if (stockDePedido[productoSeleccionado - 1]) {
//     carrito.push(stockDePedido[productoSeleccionado - 1]);

//     mostrarCarrito();

//     menu();
//   }
// };


// const totalCarrito = () => {
//     let totalCarrito = carrito.reduce((acc,carrito) => acc + carrito.precio, 0);

    

//     return alert(`Tu total a pagar es: \n $${totalCarrito}`)
// }

// const menu = () => {
//   do {
//     ingreso = Number(
//       prompt(
//         "Bienvenido a Arcolo indumentaria. Ingresa la categoria que deseas ver: \n 1)Remeras \n 2)Pantalones \n 3)Camisas \n 4)Camperas \n 5)Zapatillas \n 6)Accesorios \n 7)Salir"
//       )
      
//     );

//     switch (ingreso) {
//       case 1:
//         alert("Escogiste Remeras");
//         filtrado("Remera");
//         break;

//       case 2:
//         alert("Escogiste Pantalones");
//         filtrado("Pantalon");
//         break;

//       case 3:
//         alert("Escogiste Camisas");
//         filtrado("Camisa");
//         break;

//       case 4:
//         alert("Escogiste Camperas");
//         filtrado("Campera");
//         break;

//       case 5:
//         alert("Escogiste Zapatillas");
//         filtrado("Zapatillas");
//         break;

//       case 6:
//         alert("Escogiste Accesorios");
//         filtrado("Gorra");
//         break;

//     case 7:
//         alert("Gracias por tu visita")
//         totalCarrito()
//         break;

//       default:
//         alert("Escoge una opcion valida");
//         break;
//     }

//     seguirComprando = confirm("Desea volver a ver el menu");
//   } while (seguirComprando);
// };

// // menu();



// localStorage.setItem('Bienvenida','Hola Colo')

// const mensaje = localStorage.getItem('Bienvenida').split(',')

// console.log(mensaje);