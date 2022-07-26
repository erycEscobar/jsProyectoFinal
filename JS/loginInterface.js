const createLogin = () => {
    let log = document.querySelector('.login-container');

    log.innerHTML = `

            <div class="caja__trasera">             
                <div class="caja__trasera-login">
                    <h3>¿Ya tienes una cuenta?</h3>
                    <p>Inicia sesión para continuar</p>
                    <button id="btn__iniciar-sesion">Iniciar Sesión</button>
                </div>
                <div class="caja__trasera-register">
                    <h3>¿Aún no tienes una cuenta?</h3>
                    <p>Registrate para iniciar sesión</p>
                    <button id="btn__registrarse">Registrarse</button>
                </div>
            </div>
    
            <div class="contenedor__login-register">
                <form action="" class="formulario__login" id="formLog">
                    <h2>Iniciar Sesión</h2>
                    <input type="text" id="emailLog" placeholder="Correo Electronico">
                    <input type="password" id="passwordLog" placeholder="Contraseña">
                    <Button type="submit" id="entrar">Entrar</Button>
                    <p class="warnings" id="warningsLog"></p>
                </form>
                <form action="" class="formulario__register" id="formReg">
                    <h2>Registrarse</h2>
                    <input type="text" id="name" placeholder="Nombre Completo">
                    <input type="text" id="email" placeholder="Correo Electronico">
                    <input type="text" id="userNick" placeholder="Usuario">
                    <input type="password" id="password" placeholder="Contraseña">
                    <button type="submit">Registrarse</button>
                    <p class="warnings" id="warnings"></p>
                </form>
            </div>
            
    `;
}

createLogin();