const nombre = document.getElementById("name");
const email = document.getElementById("email");
const userNick = document.getElementById("userNick");
const pass = document.getElementById("password");
const formReg = document.getElementById("formReg");
const parrafo = document.getElementById("warnings");

const parrafoLog = document.getElementById("warningsLog");
const emailLog = document.getElementById("emailLog");
const passLog = document.getElementById("passwordLog");

const modalBg = document.querySelector('.modal-bg');

export let usuarioActivo = "invitado";

// FETCH DATA UsuariosDePrueba
const API = "./DATA/usersData.json";

const getData = async () => {
    const response = await fetch(API);
    const data = await response.json();
    return data;
};


// ARRAY DE USUARIOS
class User {
    constructor (nombre, email, nickName, password) {
        this.nombre = nombre;
        this.email = email;   
        this.nickName = nickName;
        this.password = password;
    }
}

// ARRAY DE USUARIOS
const arrayUsers = [ ];

// CARGA DE USUARIOS DE PRUEBA
async function cargarBaseDeUsuarios() {
    let baseDeUsuarios = await getData();
    if (baseDeUsuarios == null) {
        console.log("Aun no hay usuarios registrados");
        return;
    }
    else {
        console.log(baseDeUsuarios);
        console.log("Se cargaron los usuarios de prueba");
        for (const usuario of baseDeUsuarios) {
            arrayUsers.push(new User(usuario.nombre, usuario.email, usuario.nickName, usuario.password));
        }
    }
};

cargarBaseDeUsuarios();

// CONTROL DE USUARIOS CONSOLA
function printNewUser(find, propiedad) {
    let users = arrayUsers.filter(user => user[propiedad] === find);
    for (const User of users) {
        
        console.log("-- Nuevo Usuario Creado --");
        console.log("---------------------------");
        console.log("Nombre Completo: " + User.nombre);
        console.log("Usuario: " + User.nickName);
        console.log("Password: " + User.password);
        console.log("eMail: " + User.email);
        console.log("---------------------------");
        
    }; 
    console.log(arrayUsers);
}


//VERIFICACION Y REGISTRO DE USUARIOS
function verificacionUsr(find, propiedad, pass) {
    let arrayUser = arrayUsers.filter(user => user[propiedad] === find);
    for (const user of arrayUser) {
        if (user.password === pass) {
            //console.log("Usuario Activo: " + user.email);
            return true;
        }
    };
}

function mailRegistrado(find, propiedad) {
    let users = arrayUsers.filter(user => user[propiedad] === find);
    for (const User of users) {
        console.log("eMail ya usado: " + User.email);
        return true;
    }
    return false;
}

function registroUser() {
    let nombreUsr = nombre.value;
    let usuario = userNick.value;
    let emailUsr = email.value;
    let passwordUsr = password.value;
    if (mailRegistrado(emailUsr, "email")) {
        return false;
    }
    else {
        arrayUsers.push(new User(nombreUsr, emailUsr, usuario, passwordUsr));
        //printNewUser(emailUsr, "email"); Llamado a funcion de control en consola
        return true;
    }
}


// MODAL DEL REGISTRO DE USUARIOS
formReg.addEventListener("submit", e=> {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    parrafo.innerHTML = "";
    if (nombre.value.length < 4) {
        warnings += `Su nombre debe tener 4 caracteres como minimo <br>`;
        entrar = true;
    }
    if (userNick.value.length < 4) {
        warnings += `Su apellido debe tener 4 caracteres como minimo <br>`;
        entrar = true;
    }
    if (!regexEmail.test(email.value)) {
        warnings += `El email no es valido <br>`;
        entrar = true;
    }
    if (pass.value.length < 8) {
        warnings += `Su contraseña debe tener 8 caracteres como minimo <br>`;
        entrar = true;
    }
    if (entrar) {
        parrafo.innerHTML = warnings;
    }
    else {
        if (registroUser()) {
            swal({
                title: 'FELICITACIONES!',
                text: `Su usuario fue sido creado con exito`,
                icon: 'success',
            });
            warnings += `Usuario creado con exito`;
            parrafo.innerHTML = warnings;
        }
        else {
            swal({
                title: 'ERROR',
                text: 'Ya existe una cuenta con ese email, la cuenta no fue creada',
                icon: 'error',
            });
            warnings += `Ya existe una cuenta con ese mail, la cuenta no fue creada`;
            parrafo.innerHTML = warnings;
        }
    }
})


// MODAL DEL LOGIN DE USUARIOS
formLog.addEventListener("submit", f=> {
    f.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    parrafoLog.innerHTML = "";
    if (!regexEmail.test(emailLog.value)) {
        warnings += `El email no es valido<br>`;
        entrar = true;
    }
    if (passLog.value.length < 8) {
        warnings += `Su contraseña debe tener 8 caracteres como minimo<br>`;
        entrar = true;
    }
    if (entrar) {
        parrafoLog.innerHTML = warnings;
    }
    else {
        let emailUsr = emailLog.value;
        let passwordUsr = passLog.value;
        if (verificacionUsr(emailUsr, "email", passwordUsr)) {
            swal({
                title: 'BIENVENIDO!',
                text: `Hola ${emailUsr}`,
                icon: 'success',
            });
            modalBg.classList.remove('bg-active');
            usuarioActivo = emailUsr;
        }
        else {
            swal({
                title: 'ERROR',
                text: 'email/contraseña invalidas',
                icon: 'error',
            });
            warnings += `email/contraseña invalidas`
            parrafoLog.innerHTML = warnings;
        }
    }
})

// LOGOUTUSER
export function cerrarSesion () {
    usuarioActivo = "invitado";
}