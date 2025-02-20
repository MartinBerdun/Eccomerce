const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarritoVacio = document.querySelector('#carrito-vacio')
const contenedorProductos = document.querySelector('#carrito-productos')
const cotenedorCarritoAcciones = document.querySelector('#carrito-acciones')
const contenedorCarritoComprado = document.querySelector("#carrito-comprado")
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar")
const contenedrototal = document.querySelector("#total")
const botonComprar = document.querySelector("#carrito-acciones-comprar")


console.log(productosEnCarrito);

function cargarProductosCarrito () {
    if(productosEnCarrito) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorProductos.classList.remove("disabled");
        cotenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled")
    
        contenedorProductos.innerHTML = ""
    
        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                    // <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="carrito-producto-titulo">
                        <small>Título</small>
                        <h3>${producto.titulo}</h3>
                    </div>
                    <div class="carrito-producto-cantidad">
                        <small>Cantidad</small>
                        <p>${producto.cantidad}</p>
                    </div>
                    <div class="carrito-producto-precio">
                        <small>Precio</small>
                        <p>$${producto.precio}</p>
                    </div>
                    <div class="carrito-producto-subtotal">
                        <small>Subtotal</small>
                        <p>$${producto.precio * producto.cantidad}</p>
                    </div>
                    <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
                `;
            contenedorProductos.append(div);
        })
    
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorProductos.classList.add("disabled");
        cotenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled")
    }
    actualizarBotonesEliminar();
    actualizarTotal()
} 

cargarProductosCarrito();


//una vez que se agregan los productos busca en el html los botones nuevamente
function actualizarBotonesEliminar () {
    //aca se crean estos botones
    botonesEliminar = document.querySelectorAll('.carrito-producto-eliminar');

    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarDelCarrito)
    })
}

function eliminarDelCarrito(e) {
    let idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1)
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

botonVaciar.addEventListener('click', vaciarCarrito)

function vaciarCarrito () {

    productosEnCarrito.length = 0
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
    cargarProductosCarrito()

}

function actualizarTotal () {

    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0)

    total.innerText = `${totalCalculado}` 
}

botonComprar.addEventListener('click', comprarCarrito)

function comprarCarrito () {

    productosEnCarrito.length = 0
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    contenedorCarritoVacio.classList.add("disabled");
        contenedorProductos.classList.add("disabled");
        cotenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.remove("disabled");


}