import { usuarioActivo } from "./loginApp.js";
import { createUsrInterface } from "./usrInterface.js";

const loginBtn = document.querySelector('.login-btn');
const modalBg = document.querySelector('.modal-bg');
const usrModalBg = document.querySelector('.usr-modal-bg');

loginBtn.addEventListener('click', function() {
    //console.log(usuarioActivo);
    if (usuarioActivo === "invitado") {
        modalBg.classList.add('bg-active');
    }
    else {
        createUsrInterface(usuarioActivo);
        usrModalBg.classList.add('bg-active');
    }
})

window.addEventListener('click', function(e) {
    //console.log(e.target);
    if(e.target === modalBg) {
        modalBg.classList.remove('bg-active');
    }
    if(e.target === usrModalBg) {
        usrModalBg.classList.remove('bg-active');
    }
})
