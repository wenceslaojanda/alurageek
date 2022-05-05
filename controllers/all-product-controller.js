import { productServices } from "../service/products-service.js"

productServices.listaProductos().then((data) => {
   const productsContainer = document.querySelector(".products-container");
   let cards = "";
   data.forEach((producto) => {
       cards += `
                <div class="products-card">
                    <div class="products-icons">
                        <a class="delete-icons" href="id=${producto.id}"><i class="fa-solid fa-trash"></i></a>
                        <a class="edit-icons" href="./edit-product.html?id=${producto.id}"><i class="fa-solid fa-pencil"></i></a>
                    </div>
                    <img class="products-img" src="${producto.imagen}" alt="star wars image">
                    <h4>${producto.nombre}</h4>
                    <p class="products-price">R$${producto.precio}</p>
                    <p>#${producto.id}</p>
                </div>
                `;
   });

   productsContainer.innerHTML = cards;

})

//../assets/images/section/