const productos =[
    {
        "id": "abrigo-01",
        "titulo": "Abrigo 01",
        "imagen": "./img/abrigos/01.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 1000
    },
    {
        "id": "abrigo-02",
        "titulo": "Abrigo 02",
        "imagen": "./img/abrigos/02.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 1000
    },
    {
        "id": "abrigo-03",
        "titulo": "Abrigo 03",
        "imagen": "./img/abrigos/03.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 1000
    },
    {
        "id": "abrigo-04",
        "titulo": "Abrigo 04",
        "imagen": "./img/abrigos/04.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 1000
    },
    {
        "id": "abrigo-05",
        "titulo": "Abrigo 05",
        "imagen": "./img/abrigos/05.jpg",
        "categoria": {
            "nombre": "Abrigos",
            "id": "abrigos"
        },
        "precio": 1000
    },
    {
        "id": "camiseta-01",
        "titulo": "Camiseta 01",
        "imagen": "./img/camisetas/01.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        "id": "camiseta-02",
        "titulo": "Camiseta 02",
        "imagen": "./img/camisetas/02.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        "id": "camiseta-03",
        "titulo": "Camiseta 03",
        "imagen": "./img/camisetas/03.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        "id": "camiseta-04",
        "titulo": "Camiseta 04",
        "imagen": "./img/camisetas/04.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        "id": "camiseta-05",
        "titulo": "Camiseta 05",
        "imagen": "./img/camisetas/05.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        "id": "camiseta-06",
        "titulo": "Camiseta 06",
        "imagen": "./img/camisetas/06.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        "id": "camiseta-07",
        "titulo": "Camiseta 07",
        "imagen": "./img/camisetas/07.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        "id": "camiseta-08",
        "titulo": "Camiseta 08",
        "imagen": "./img/camisetas/08.jpg",
        "categoria": {
            "nombre": "Camisetas",
            "id": "camisetas"
        },
        "precio": 1000
    },
    {
        "id": "pantalon-01",
        "titulo": "Pantalón 01",
        "imagen": "./img/pantalones/01.jpg",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalones"
        },
        "precio": 1000
    },
    {
        "id": "pantalon-02",
        "titulo": "Pantalón 02",
        "imagen": "./img/pantalones/02.jpg",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalones"
        },
        "precio": 1000
    },
    {
        "id": "pantalon-03",
        "titulo": "Pantalón 03",
        "imagen": "./img/pantalones/03.jpg",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalones"
        },
        "precio": 1000
    },
    {
        "id": "pantalon-04",
        "titulo": "Pantalón 04",
        "imagen": "./img/pantalones/04.jpg",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalones"
        },
        "precio": 1000
    },
    {
        "id": "pantalon-05",
        "titulo": "Pantalón 05",
        "imagen": "./img/pantalones/05.jpg",
        "categoria": {
            "nombre": "Pantalones",
            "id": "pantalones"
        },
        "precio": 1000
    }
]

const contenedorProductos = document.querySelector('#contenedor-productos');
const botonesCategorias = document.querySelectorAll('.boton-categoria');
const tituloPrincipal = document.querySelector('#titulo-principal');
let botonesAgregar = document.querySelectorAll('.producto-agregar');
const numerito = document.querySelector('#numerito');


function cargarProductos(productosElegidos) {

    //esto es para que se resetee cada vez que los filtro por las categorias y no se sigan añadiendo abajo del otro
    //cuando la funcion s eejecute, primero que nada va a vaciar el contenedor y luego renderiza lo que le toque
    contenedorProductos.innerHTML="";

    //recorro el array y por cada archivo lo añado al DOM
    //el for each recorre todos los elementos y por cada uno de ellos ejecuta algo
    productosElegidos.forEach(producto => {
        const div = document.createElement("div"); //creo un elemento en el html 
        div.classList.add('producto'); //le agrego la clase
        div.innerHTML= ` /
        
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        ` //dentro del elemento html agrego la estructura html
        contenedorProductos.append(div)
    });

    //cada vez que se llame a la funcion madre, se van a actualizar los botones agregar
    actualizarBotonesAgregar ()
}

cargarProductos(productos);

/////////////// FILTRADO POR CATEGORIAS ///////////////////
//LO PRIMERO QUE HAY QUE HACER ES AGREGARLES UN LISTENER PARA QUE AL APRETARLOS PASE ALGO.

botonesCategorias.forEach(boton => {
    boton.addEventListener('click', (e)=> {
        //esta estructura es para que al presionar un boton se le quite al otro el activado
        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        //para que el boton aparezca como avtivado en el html
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos") {
            //para cambiar el tutilo del envabezado segun la categoria
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            //filtro los productos a mostrarse en el html
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton)
        } else {
            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos)
        }
        //uso la misma funcion de cargar productos pero ahora con un filtro 
    })
})

/////////////// PARA AGREGAR LOS PRODUCTOS AL CARRITO /////////////////////

//una vez que se agregan los productos busca en el html los botones nuevamente
function actualizarBotonesAgregar () {
    //aca se crean estos botones
    botonesAgregar = document.querySelectorAll('.producto-agregar');

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito)
    })
}

let productosEnCarrito;

const productosEnCarritoLSTORAGE = JSON.parse(localStorage.getItem("productos-en-carrito"));

if(productosEnCarritoLSTORAGE) {
    productosEnCarrito = productosEnCarritoLSTORAGE;
    actualizarNumerito()
} else {
    productosEnCarrito = [];

}


function agregarAlCarrito(e) {
    //le paso el evento a la funcion y de ahi saco el id
    const idBoton = e.currentTarget.id;
    //busco el producto que tenga el mismo id
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    //lo agrego al array del carrito
    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad++
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

function actualizarNumerito () {

//imp buscar el metodo reduce()
//suma cada producto que se va suamndo al array del carrito
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc+producto.cantidad, 0);
    numerito.innerText= nuevoNumerito;

}