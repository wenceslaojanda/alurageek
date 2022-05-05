import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll(".input");
let path = window.location.pathname;
const inputContact = document.querySelectorAll(".input-contact");
const buttonSubmitContact = document.querySelector(".button-submit-contact");
const buttonSubmitAdd = document.querySelector(".button-submit-add");

inputs.forEach(input => {
    if(input.type == "file"){
        
        input.addEventListener('click', (input) => {
            valida(input.target, inputs, buttonSubmitAdd);
        });
        input.addEventListener('change', (input) => {
            valida(input.target, inputs, buttonSubmitAdd);
        });
        return;
    }

    input.addEventListener("blur", (input) => {
        valida(input.target, inputs, buttonSubmitAdd);
    });
    input.addEventListener("keyup", (input) => {
        valida(input.target, inputs, buttonSubmitAdd);
    });
    
}); 


inputContact.forEach(input => {
        
    input.addEventListener("blur", (input) => {
        valida(input.target, inputContact, buttonSubmitContact);
    });
    input.addEventListener("keyup", (input) => {
        valida(input.target, inputContact, buttonSubmitContact);
    });
    
}); 


const btnLogin = document.querySelector(".header-btn-login");
const btnBanner = document.querySelector(".btn-banner");

btnLogin.addEventListener("click", e => {
    window.location.href = "login.html";
});

if(path == "/" || path == "/index.html"){
    btnBanner.addEventListener("click", e => {
        window.location.href = "#consolas"
});
}

const imgFile = document.querySelector(".img-file");
const previewI = document.querySelector(".preview-i");
const previewH4 = document.querySelector(".preview-h4");
let previewImg = document.querySelector(".preview-img");

if(path == "/screens/add-product.html"){
    imgFile.addEventListener("change", event => {
        showPreview(event);
    });
}

function showPreview(event){
    
    if(event.target.files.length > 0){
      let src = URL.createObjectURL(event.target.files[0]);
      console.log(event.target.files[0]);
      console.log(src);
      previewImg.src = src;
      previewImg.style.display = "block";
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
    previewImg.src = "";
    previewImg.style.display = "none";
    
}






