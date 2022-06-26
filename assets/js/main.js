const btn_menu = document.querySelector("#menu__btn");
const nav__enlaces = document.querySelector(".nav__enlaces");

contador = 0;
btn_menu.addEventListener("click", ()=>{
    nav__enlaces.classList.toggle("nav__enlaces_active")
    if (contador == 0){
        btn_menu.src = "images/icon-close.svg";
        contador = 1;
    } else {
        btn_menu.src = "images/icon-hamburger.svg"
        contador = 0;
    }
});