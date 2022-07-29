import { getData } from "./getDataProducts.js";

const btnFinalizarCompra = document.querySelector('.finalizarCompra');
const cartModalBg = document.querySelector('.cartModal-bg');

const buscador = document.querySelector('.search-box');
const contenedorProductos = document.querySelector('.product-container');

const precioTotal = document.getElementById('precioTotal');

const simulation = document.getElementById('simulationFilter');
const modulation = document.getElementById('modulationFilter');
const distortion = document.getElementById('distortionFilter');
const dynamic = document.getElementById('dynamicFilter');
const looper = document.getElementById('looperFilter');
const todos = document.getElementById('todosFilter');

let cart = [];

let vaciarCarrito = [];

const productos = await getData();


// FINALIZAR COMPRA
btnFinalizarCompra.addEventListener('click', () => {
    let total = precioTotal.innerText;
    cartModalBg.classList.remove('bg-active');
    cart = vaciarCarrito;
    localStorage.setItem('carrito', JSON.stringify(cart));
    mostrarCarrito(cart);
    actualizarCarrito();
    swal({
        title: 'MUCHAS GRACIAS POR SU COMPRA!',
        text: `El monto total a pagar seran $${total}`,
        icon: 'success',
    });
})

// BUSQUEDAS
simulation.addEventListener('click', () => {
    let resultadoEfecto = productos.filter(find => find.efecto.includes("simulation"));
    mostrarProductos(resultadoEfecto);
})

modulation.addEventListener('click', () => {
    let resultadoModulation = productos.filter(find => find.efecto.includes("modulation"));
    mostrarProductos(resultadoModulation);
})

distortion.addEventListener('click', () => {
    let resultadoDistortion = productos.filter(find => find.efecto.includes("distortion"));
    mostrarProductos(resultadoDistortion);
})

dynamic.addEventListener('click', () => {
    let resultadoDynamic = productos.filter(find => find.efecto.includes("dynamic"));
    mostrarProductos(resultadoDynamic);
})

looper.addEventListener('click', () => {
    let resultadoLooper = productos.filter(find => find.efecto.includes("looper"));
    mostrarProductos(resultadoLooper);
})

todos.addEventListener('click', () => {
    mostrarProductos(productos);
})

buscador.addEventListener('input', (e) => {
    console.log(e);
    let resultadoNombre = productos.filter(elemento => elemento.nombre.toLowerCase().includes(e.target.value));
    mostrarProductos(resultadoNombre);
});


// SE MUESTRAN LOS PRODUCTOS DISPONIBLES
const mostrarProductos = (array) => {
    contenedorProductos.innerHTML = "";   
    array.forEach(producto => {
        let div = document.createElement('div')
        div.innerHTML = `
            <div class="product-card">
                <div class="product-image">
                    <img src=${producto.img} alt="" class="product-thumb">
                    <button id="boton${producto.id}" class="card-btn">Añadir a carrito</button>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">${producto.marca}</h2>
                    <p class="product-short-des">${producto.modelo}</p>
                    <span class="price">$${producto.precio}</span>
                </div>
            </div>
        `;
        contenedorProductos.appendChild(div);

        let btnAgregar = document.getElementById(`boton${producto.id}`);      

        btnAgregar.addEventListener('click', () => {
            //console.log(producto.id);
            agregarAlCarrito(producto.id);
        });

    });
}


// SE AGREGAN LOS PRODUCTOS AL CARRITO
function agregarAlCarrito(id) {
    if(cart && cart.find(item => item.id === id)) {
        console.log("ya esta en el carrito");
        let existProd = cart.find(item => item.id === id);
        existProd.cantidad++;
        mostrarCarrito(cart);
        actualizarCarrito();
        localStorage.setItem('carrito', JSON.stringify(cart));    
    }else{
        let productoAgregar = productos.find(item => item.id === id);
        productoAgregar.cantidad = 1;
        cart.push(productoAgregar);
        mostrarCarrito(cart);
        actualizarCarrito();
        localStorage.setItem('carrito', JSON.stringify(cart));
    }
}


// SE ACTUALIZA EL PRECIO DEL CARRITO
function actualizarCarrito() {
    precioTotal.innerText = cart.reduce((acc,el)=> acc + el.precio * el.cantidad, 0);
}


// SE RECUPERA EL CARRITO DEL LOCAL STORAGE
function restoreCart() {
    let restoreLS = JSON.parse(localStorage.getItem('carrito'));
    if (restoreLS) {
        restoreLS.forEach(element => {
            cart.push(element);
            actualizarCarrito();
        });
        mostrarCarrito(cart);
    }
}


// SE MUESTRAN LOS PRODUCTOS EN EL CARRITO
function mostrarCarrito(array) {
    let cartContainer = document.querySelector('.productosEnCarrito');
    cartContainer.innerHTML = "";
    array.forEach(productoAgregar => {
        let div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `
            <p>${productoAgregar.marca}</p>
            <p>${productoAgregar.modelo}</p>
            <p>${productoAgregar.nombre}</p>
            <p>$${productoAgregar.precio}</p>
            <p>cantidad:${productoAgregar.cantidad}</p>
            <button id=eliminar${productoAgregar.id}>X</button>
        `;
        cartContainer.appendChild(div);
    
        let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`);
        btnEliminar.addEventListener('click', () => {
            btnEliminar.parentElement.remove();
            cart = array.filter( ele => ele.id !== productoAgregar.id);
            actualizarCarrito()

            localStorage.setItem('carrito', JSON.stringify(cart));
        })
    })
}

mostrarProductos(productos);
restoreCart();