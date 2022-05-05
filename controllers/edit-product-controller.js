import { productServices } from "../service/products-service.js"

const imgProducto = document.querySelector(".preview-img");
const imgData = document.querySelector("[data-img]");
const previewI = document.querySelector(".preview-i");
const previewH4 = document.querySelector(".preview-h4");
const nombreProducto = document.querySelector("[data-nombre]");
const precioProducto = document.querySelector("[data-precio]");
const descripcionProducto = document.querySelector("[data-descripcion]");
const select = document.querySelector("[data-select]");
const btnModificarProducto = document.querySelector(".button-submit-add");

const formulario = document.querySelector("[data-form]");


imgData.addEventListener("change", event => {
    showPreview(event);
    console.log(imgProducto.src);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = nombreProducto.value;
    const descripcion = descripcionProducto.value;
    const precio = precioProducto.value;
    const imagen = '1starwars.svg';
    console.log(imagen)
    const categoria = select.value;
    
 
    productServices.actualizarProducto(id, nombre, descripcion, precio, imagen, categoria).then(() => {
        window.location.href = './all-products.html';
    });

    

    

});


function showPreview(event){
    
    if(event.target.files.length > 0){
      let src = URL.createObjectURL(event.target.files[0]);
      imgProducto.src = src;
      imgProducto.style.display = "block";
      previewI.classList.add("no-display");
      previewH4.classList.add("no-display");
      
      previewI.classList.remove("display");
      previewH4.classList.remove("display");
      return;
    } 

    previewI.classList.remove("no-display");
    previewI.classList.add("display");
    previewH4.classList.remove("no-display");
    previewH4.classList.add("display");
    imgProducto.src = "";
    imgProducto.style.display = "none";
    
}


const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    productServices.detalleProducto(id).then((producto) => {
        cargarCategorias(producto.categoria);
          
        imgProducto.setAttribute("src", `../assets/images/section/${producto.imagen}`);
        imgProducto.style.display = "block";
        previewI.classList.add("no-display");
        previewH4.classList.add("no-display");
        nombreProducto.value = producto.nombre;
        precioProducto.value = producto.precio;
        descripcionProducto.value = producto.descripcion;

        /* imgData.src = imgProducto.src;
        btnModificarProducto.disabled = false; */
        
    });
}

const cargarCategorias = (category) => {
    

    productServices.listaCategoria().then((data) => {
        let categorias = {};
        data.forEach((producto) => {
            if(!categorias.hasOwnProperty(producto.categoria)){
                categorias[producto.categoria] = "";
            }
        })

        let options = '';
        for(const categoria in categorias){
            if(categoria == category){
                options += `
                            <option selected value="${categoria}">${categoria}</option>     
                        `;      
            }else{
                options += `
                            <option value="${categoria}">${categoria}</option>     
                        `;     
            }
                   
        }
    
        select.innerHTML = options; 
    });
}

obtenerInformacion();

