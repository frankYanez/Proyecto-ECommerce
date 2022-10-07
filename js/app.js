const selectProductos = document.getElementById("selectProductos");
const container = document.getElementById("productos");
const btonComprar = document.getElementsByClassName(".button");
const btonDelete = document.getElementsByClassName('button-delete')

const carrito = [];

selectProductos.addEventListener("change", () => {
  selectProductos.value === "Todos"
    ? showAllProducts(stockProductos)
    : showAllProducts(
        stockProductos.filter(
          (element) => element.categoria == selectProductos.value
        )
      );
});

showAllProducts(stockProductos);

function showAllProducts(array) {
  container.innerHTML = "";

  array.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<div>
      <h4>${producto.nombre}</h4>
      <img class="img-card" src="${producto.img}" alt="">
      <h5>${producto.categoria}</h5>
      <h6>$${producto.precio}</h6>
      <h6>${producto.cantidad}</h6>
      <button class="button" id="${producto.id}" >Comprar</button>
      </div>`;

    container.appendChild(div);

    div.querySelector("button").addEventListener("click", () => {
      agregarProductosAlCarrito(producto.id);
    });
  });
}

function agregarProductosAlCarrito(id) {
  let productoEncontrado = stockProductos.find(
    (producto) => producto.id === id
  );


  let productoEnCarrito = carrito.find((producto) => producto.id === id);

  productoEnCarrito ? productoEnCarrito.cantidad++ :carrito.push(productoEncontrado);
  showProductsCarrito();
  
  carritoTotal();
  
  setLocal(carrito);
}

function showProductsCarrito() {
  const carritoProductos = document.getElementById('carrito');

  carritoProductos.innerHTML = "";

  carrito.forEach((producto, index) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<div>
      <h4>${producto.nombre}</h4>
      <img class="img-card" src="${producto.img}" alt="">
      <h5>${producto.categoria}</h5>
      <h6>$${producto.precio}</h6>
      <p>Cantidad: ${producto.cantidad}</p>
      <button class="button button-delete">Eliminar</button>
      </div>`;

    div.querySelector(".button-delete").addEventListener("click", () => {
      deleteProducts(index);
      
    });

    carritoProductos.appendChild(div);
    masVendidos(producto.img)
  });
  

  getLocal(carritoProductos);
}

function deleteProducts(index) {
  carrito[index].cantidad--;

  if (carrito[index].cantidad === 0) {
    carrito.splice(index, 1);
  }
  showProductsCarrito();
  carritoTotal();
}

function carritoTotal() {
  let total = 0;

  carrito.forEach((producto) =>{
    total += producto.precio * producto.cantidad
  })



  // const t = document.getElementById('total');
  // t.innerHTML = `<h5>${total}</h5>`
  
  // console.log(total);
}

function setLocal(item) {
  const formatJson = JSON.stringify(item);

  localStorage.setItem("item", formatJson);
}

function getLocal(item) {
  const formatJson = JSON.parse(localStorage.getItem(item));
}


function masVendidos(...objeto) {
  const agregarImagenes = document.getElementById('carritoImagenes');

  agregarImagenes.innerHTML='';
  
  
}
