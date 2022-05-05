import { productServices } from "../service/products-service.js"

productServices.listaProductos().then((data) => {
    let sections = {};
    data.forEach((producto) => {
        if(!sections.hasOwnProperty(producto.categoria)){
            sections[producto.categoria] = [];
            sections[producto.categoria].push(producto);
        }else{
            sections[producto.categoria].push(producto);
        }
    })
    for(const section in sections){
        const nuevaSeccion = crearNuevaSeccion(section, sections[section]);
        const productos = document.querySelector(".productos");
        productos.appendChild(nuevaSeccion);
    }
})

/* productServices.listaProductos().then((data) => {
    data.forEach((categoria) => {
        const nuevaSeccion = crearNuevaSeccion(categoria.categoria, categoria.productos);
        const productos = document.querySelector(".productos");
        productos.appendChild(nuevaSeccion);
        
    })
})
 */
function crearNuevaSeccion(categoria, productos) {
    const section = document.createElement('section');
    
    const container = document.createElement('div');
    container.classList.add('container');

    const productCategory = document.createElement('div');
    productCategory.classList.add('products-category');

    const productHeader = document.createElement('div');
    productHeader.classList.add('products-header');

    const productHeaderContent = `<h2>${categoria}</h2>
        <a class="link" href="./screens/all-products.html">Ver todo <i class="fa-solid fa-arrow-right"></i></a>`;

    productHeader.innerHTML = productHeaderContent;

    const productsContainer = document.createElement("div");
    productsContainer.classList.add("products-container")

    productCategory.appendChild(productHeader);

    const tarjetasProductos = crearTarjetasProductos(productos);
    productsContainer.innerHTML = tarjetasProductos;
    productCategory.appendChild(productsContainer);
    container.appendChild(productCategory);
    section.appendChild(container);

    return section;

}

function crearTarjetasProductos(productos) {
    let cards = "";
    productos.forEach(producto => {
        
        const {id, nombre, descripcion, precio, imagen, categoria  } = producto;
        console.log(id, nombre, descripcion, precio, imagen, categoria);
        cards += `
            <div class="products-card">
                <img class="products-img" src="./assets/images/section/${imagen}" alt="star wars image">
                <h4>${nombre}</h4>
                <p class="products-price">$${precio}</p>
                <a class="link" href="./screens/product-detail.html?id=${id}" data-id="${id}">Ver producto</a>
            </div>`
    })

    return cards;
}

