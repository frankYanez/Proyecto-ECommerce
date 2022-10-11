const selectProductos = document.getElementById("selectProductos");
const container = document.getElementById("productos");

const btonDelete = document.getElementsByClassName('button-delete')

const carrito = JSON.parse(localStorage.getItem('carrito'))||[];

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
    const {id,nombre,precio,categoria,img,cantidad} = producto
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<div>
      <h4>${nombre}</h4>
      <img class="img-card" src="${img}" alt="">
      <h5>${categoria}</h5>
      <h6>$${precio}</h6>
      <h6>${cantidad}</h6>
      <button class="button buttonComprar" id="${id}" >Comprar</button>
      </div>`;
      

    container.appendChild(div);

    

    div.querySelector("button").addEventListener("click", () => {
      agregarProductosAlCarrito(producto.id);
      comprarToasty()
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
    masVendidos(producto)
    
  });
  

}

function deleteProducts(index) {
  carrito[index].cantidad--;

  if (carrito[index].cantidad === 0) {
    carrito.splice(index, 1);
  }
  showProductsCarrito();
  carritoTotal();
  setLocal(carrito);
  eliminarToasty();
}

function carritoTotal() {
  let total = 0;

  carrito.forEach((producto) =>{
    total += producto.precio * producto.cantidad
  })

  console.log(total);


  const t = document.getElementById('total');

  t.innerHTML = `<h5>${total}</h5>`
  
  console.log(total);
}

function setLocal(carrito) {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}




function masVendidos(objeto) {
  const agregarImagenes = document.getElementById('carritoImagenes');
  
  console.log(objeto.img);

  agregarImagenes.innerHTML = `
  <img src='${objeto.img}'>`


  
  
  
};

// const btonComprar = document.querySelector(".buttonComprar");
// btonComprar.addEventListener('click',comprarToasty())
// console.log(btonComprar);

const comprarToasty = () => {
  Toastify({
    
    text: "Producto Añadido",
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)"
  }}).showToast()
};

const eliminarToasty = () => {
  Toastify({
    
    text: "Producto Eliminado",
  style: {
    background: "linear-gradient(to right, rgb(150, 2, 0), #fff)"
  }}).showToast()
}

showProductsCarrito()


