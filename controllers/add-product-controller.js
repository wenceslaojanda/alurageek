import { productServices } from "../service/products-service.js"

const formulario = document.querySelector("[data-form]");
const select = document.querySelector("[data-select]");

window.onload = cargaCategorias();

function cargaCategorias() {
    productServices.listaCategoria().then((data) => {
        let categorias = {};
        data.forEach((producto) => {
            if(!categorias.hasOwnProperty(producto.categoria)){
                categorias[producto.categoria] = "";
            }
        })

        let options = '';
        for(const categoria in categorias){
            options += `
            <option value="${categoria}">${categoria}</option>     
            `;            
        }
    
        select.innerHTML = options; 
    })
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const imgValue = document.querySelector("[data-img]").value;
    const nombreValue = document.querySelector("[data-nombre]").value;
    const precioValue = document.querySelector("[data-precio]").value;
    const descripcionValue = document.querySelector("[data-descripcion]").value;
    const selectValue = document.querySelector("[data-select]").value;

    productServices.crearProducto(nombreValue, descripcionValue, precioValue, imgValue, selectValue).then( (respuesta) => {
        console.log(respuesta);
    })
    .catch((err) => console.log(err));
})
 
