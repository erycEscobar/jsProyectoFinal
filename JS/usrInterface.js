import { usuarioActivo } from "./loginApp.js";
import { cerrarSesion } from "./loginApp.js";

const usrModalBg = document.querySelector('.usr-modal-bg');

export const createUsrInterface = (usuarioActivo) => {
    
    let log = document.querySelector('.user-container');

    log.innerHTML = `

            <div class="caja__trasera">             
                <div class="caja__trasera-login">
                    <h3>${usuarioActivo}</h3>
                    <p>Desea Cerrar Su Sesión?</p>
                    <button id="btn-cerrar-sesion">Cerrar Sesión</button>
                </div>
            </div>           

    `;

    const btnCerrarSesion = document.querySelector('#btn-cerrar-sesion');

    btnCerrarSesion.addEventListener('click', function() {
        swal({
            title: 'GRACIAS VUELVA PRONTO!',
            text: `ADIOS ${usuarioActivo}`,
            icon: 'success',
        });
        cerrarSesion();
        usrModalBg.classList.remove('bg-active');
    })    
}

createUsrInterface(usuarioActivo);
