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
    <button class="button">Comprar</button>
    </div>`;

  container.appendChild(div);
});

}

showAllProducts()

