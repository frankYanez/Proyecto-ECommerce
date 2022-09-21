

//NUEVO TRABAJO COMPLEMENTARIO

let ingreso;
let seguirComprando;
let carrito = [];
let filtrados;

const filtrado = (pedido) => {
  const stockFiltrado = stockProductos.filter((producto) => {
    return producto.nombre.toLowerCase().includes(pedido.toLowerCase());
  });

  agregarProductoACarrito(stockFiltrado);
};

const mostrarCarrito = () => {
  let carritoString = "";

  carrito.forEach((producto, index) => {
    return (carritoString += `${index + 1}. ${producto.nombre} - ${
      producto.precio
    }\n`);
  });

  alert(`Tu carrito contiene:\n\n${carritoString}`);
};

const agregarProductoACarrito = (stockDePedido) => {
  let filtrados = "";

  stockDePedido.forEach((producto, index) => {
    return (filtrados += `${index + 1}. ${producto.nombre} - ${
      producto.precio
    }\n`);
  });

  let productoSeleccionado = prompt(
    `Ingresa el producto que deseas agregar de la lista:\n\n ${filtrados}`
  );

  if (stockDePedido[productoSeleccionado - 1]) {
    carrito.push(stockDePedido[productoSeleccionado - 1]);

    mostrarCarrito();

    menu();
  }
};


const totalCarrito = () => {
    let totalCarrito = carrito.reduce((acc,carrito) => acc + carrito.precio, 0);

    

    return alert(`Tu total a pagar es: \n $${totalCarrito}`)
}

const menu = () => {
  do {
    ingreso = Number(
      prompt(
        "Bienvenido a Arcolo indumentaria. Ingresa la categoria que deseas ver: \n 1)Remeras \n 2)Pantalones \n 3)Camisas \n 4)Camperas \n 5)Zapatillas \n 6)Accesorios \n 7)Salir"
      )
      
    );

    switch (ingreso) {
      case 1:
        alert("Escogiste Remeras");
        filtrado("Remera");
        break;

      case 2:
        alert("Escogiste Pantalones");
        filtrado("Pantalon");
        break;

      case 3:
        alert("Escogiste Camisas");
        filtrado("Camisa");
        break;

      case 4:
        alert("Escogiste Camperas");
        filtrado("Campera");
        break;

      case 5:
        alert("Escogiste Zapatillas");
        filtrado("Zapatillas");
        break;

      case 6:
        alert("Escogiste Accesorios");
        filtrado("Gorra");
        break;

    case 7:
        alert("Gracias por tu visita")
        totalCarrito()
        break;

      default:
        alert("Escoge una opcion valida");
        break;
    }

    seguirComprando = confirm("Desea volver a ver el menu");
  } while (seguirComprando);
};

// menu();



localStorage.setItem('Bienvenida','Hola Colo')

const mensaje = localStorage.getItem('Bienvenida').split(',')

console.log(mensaje);
