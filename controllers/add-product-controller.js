import { productServices } from "../service/products-service.js"

const formulario = document.querySelector("[data-form]");
const select = document.querySelector("[data-select]");

const imgValue = document.querySelector("[data-img]");

var imgPath = null;

imgValue.addEventListener('change', (e) => {
    let fReader = new FileReader();
      fReader.readAsDataURL(imgValue.files[0]);
      fReader.onloadend = function (event) {
        console.log(event.target.result);
        imgPath = event.target.result;
        
      };

    });
  

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
    const imgData = imgPath;
    const nombreValue = document.querySelector("[data-nombre]").value;
    const precioValue = document.querySelector("[data-precio]").value;
    const descripcionValue = document.querySelector("[data-descripcion]").value;
    const selectValue = document.querySelector("[data-select]").value;

    productServices.crearProducto(nombreValue, descripcionValue, precioValue, imgData, selectValue).then( (respuesta) => {
        console.log(respuesta);
    })
    .catch((err) => console.log(err));
})
 
