const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const productos = [
  {
    id: 1,
    nombre: "Harina",
    precio: 50,
    img: "https://i.blogs.es/95d4c3/harina-trigo-tipos/1366_2000.jpg",
  },
  {
    id: 2,
    nombre: "Galletas",
    precio: 100,
    img: "https://mandolina.co/wp-content/uploads/2023/06/galletas-chispas-de-chocolate.jpg",
  },
  {
    id: 3,
    nombre: "Cerveza",
    precio: 150,
    img: "https://www.rionegro.com.ar/wp-content/uploads/2022/12/cerveza-32424.png?w=1024"
  },
  {
    id: 4,
    nombre: "Leche",
    precio: 200,
    img: "https://s3.abcstatics.com/media/bienestar/2020/07/09/leche-fucha-khMC--620x349@abc.jpg"
  }
];

let carrito = [];

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
  `;

  shopContent.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "Comprar";
  comprar.className = "Comprar";

  content.append(comprar);

  comprar.addEventListener("click", () =>{
    carrito.push({
      id : product.id,
      img: product.img,
      nombre: product.nombre,
      precio: product.precio,
    });
    console.log(carrito);
  })
});

verCarrito.addEventListener("click", () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>
  `;
  modalContainer.append(modalHeader);

  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button";

  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalbutton);

  
  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
    <img src=${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio} $</p>
    `;

    modalContainer.append(carritoContent);
  });

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);

  const totalBuying = document.createElement("div");
  totalBuying.className = "total-content";
  totalBuying.innerHTML = `Total a pagar: ${total} $`;
  modalContainer.append(totalBuying);
});