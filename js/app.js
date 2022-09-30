const selectProductos = document.getElementById('selectProductos');
const container = document.getElementById('productos');
const cartCount = document.getElementById('cartCount');
const totalPrice = document.getElementById('totalPrice');
const btonComprar = document.querySelector('.button')
const carrito = [];

selectProductos.addEventListener('change', () => {
  selectProductos.value === 'Todos' ? showAllProducts(stockProductos) : showAllProducts(
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
    (producto) => producto.id === id);

    console.log(productoEncontrado);

    let productoEnCarrito = carrito.find(producto => producto.id === id)

    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
      carritoActualizado( )
    }else {

      carrito.push(productoEncontrado);
      carritoActualizado()
    
  }
  showProductsCarrito();
  setLocal(carrito)

}




function showProductsCarrito() {

  
  const carritoProductos = document.getElementById("carrito");

  carritoProductos.innerHTML='';

  carrito.forEach((producto, id) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<div>
      <h4>${producto.nombre}</h4>
      <img class="img-card" src="${producto.img}" alt="">
      <h5>${producto.categoria}</h5>
      <h6>$${producto.precio}</h6>
      <p>Cantidad: ${producto.cantidad}</p>
      <button class="button">Eliminar</button>
      </div>`;

    carritoProductos.appendChild(div);
  });

  getLocal(carritoProductos)

}


function carritoActualizado() {
  cartCount.innerText = carrito.length;
  totalPrice.innerText = carrito.reduce((acc,el)=>acc + el.precio,0);
  
};

function setLocal(item) {
  const formatJson = JSON.stringify(item)

  localStorage.setItem('item',formatJson)
}

function getLocal(item) {
  const formatJson = JSON.parse(localStorage.getItem(item))
}













