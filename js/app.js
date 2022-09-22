const selectProductos = document.getElementById('selectProductos');
const carrito = [];

selectProductos.addEventListener("change", () => {
  console.log(selectProductos.value);
  if (selectProductos.value === "Todos") {
    showAllProducts(stockProductos);
  } else {
    const filtrado = showAllProducts(
      stockProductos.filter(
        (element) => element.categoria == selectProductos.value
      )
    );
    console.log(filtrado);
  }
});



function showAllProducts() {
  const container = document.getElementById("productos");

  stockProductos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<div>
  <h4>${producto.nombre}</h4>
  <img class="img-card" src="${producto.img}" alt="">
  <h5>${producto.categoria}</h5>
  <h6>$${producto.precio}</h6>
  <button class="button" id="${producto.id}" >Comprar</button>
  </div>`;

    container.appendChild(div);

    div.querySelector('button').addEventListener('click', ()=>{
      agregarProductosAlCarrito(producto.id)
    })
  });
};

showAllProducts();

function agregarProductosAlCarrito(id) {
  let productoEncontrado = stockProductos.find(producto => producto.id === id)
  
  carrito.push(productoEncontrado)
  
  showProductsCarrito()

}


function showProductsCarrito() {
  const carritoProductos = document.getElementById('carrito');

  carrito.forEach((producto,id)=>{
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<div>
  <h4>${producto.nombre}</h4>
  <img class="img-card" src="${producto.img}" alt="">
  <h5>${producto.categoria}</h5>
  <h6>$${producto.precio}</h6>
  <button class="button">Eliminar</button>
  </div>`;

  carritoProductos.appendChild(div)
  })
}

