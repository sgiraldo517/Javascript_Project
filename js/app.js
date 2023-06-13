// Saludo y deficion de tipo de usuario


function saludo () {
    let nombre;
    nombre = prompt('Bienvenido a tu libreria online. Ingresa tu nombre');
    seleccionUsuario(nombre);
}

saludo();

function seleccionUsuario (nombre) {
    let tipoDeUsuario;
    let usuario = prompt('Hola ' + nombre + '! Por favor indicanos que quisieras hacer hoy \n 1) Vender libros \n 2) Comprar libros \n 3) Ninguna, quiero salir');
    tipoUsuario(usuario);

    function tipoUsuario(usuario) {
        if (usuario == 1) {
            tipoDeUsuario = 'vendedor'
        } else if (usuario == 2) {
            tipoDeUsuario = 'comprador'
        } else if (usuario == 3) {
            alert('Gracias por visitarnos!')
        } else {
            usuarioNoIngresado()
        }

        return tipoDeUsuario;
    }

    function usuarioNoIngresado(usuario) {
        while (usuario != 1 || usuario != 2 || usuario != 3) {
            usuario = prompt('No entendimos tu respuesta. Por favor indica una de las siguientes opciones: \n 1) Vender libros \n 2) Comprar libros \n 3) Ninguna, quiero salir')
            return tipoUsuario(usuario);
        }
    }

    serviciosUsuario(tipoDeUsuario);

}

// Servicios segun tipo de usuario 

function serviciosUsuario(tipoDeUsuario) {

let arrayProductos = []

    // Servicios Vendedor

    if(tipoDeUsuario == 'vendedor') {

        do {
            ingresarNuevaVenta(); 
            } while (agregarOtro == 1)
            if (agregarOtro == 2) {
                let mensajeAnadidos = "Tus libros para vender han sido agregados: \n"
                    for (let i = 0; i < arrayProductos.length; i++) {
                        let producto = arrayProductos[i];
                        mensajeAnadidos += "Nombre del libro: " + producto.nombre + ", Precio: " + producto.precio + ", Estado: " + producto.libroUsado + "\n";
                    }
                alert(mensajeAnadidos + "\n" + 'Gracias por visitarnos!')
            }

        function ingresarNuevaVenta() {
            class Libro {
                constructor(nombre, precio, libroUsado){
                    this.nombre = nombre;
                    this.precio = precio;
                    this.libroUsado = libroUsado;
                }
            }

            let name = prompt("Ingresa el nombre del libro");
            let used = prompt("Es el libro es usado? Indique: \n 1) Si \n 2) No");
                let price;
                let descuento;
                let libroUsado;
                const iva = 0.15
                if(used == "1") {
                    libroUsado = 'Usado';
                    price = 10;
                    descuento = 0.1;
                } else if(used == "2") {
                    libroUsado = 'Nuevo';
                    price = 15
                    descuento = 0;
                }
            let precio = price * (1 + descuento + iva);

            const libroAnadido = new Libro(name,precio,libroUsado);
            arrayProductos.push(libroAnadido)

            agregarOtro = prompt("Quieres agregar otra venta? \n 1) Si \n 2) No")
            return agregarOtro

        }

    console.log(arrayProductos)

    // Servicios Comprador

    } else if(tipoDeUsuario == 'comprador') {

        let arrayProductos = [
            {
                nombre: "Libro1",
                precio: 17.25,
                libroUsado: "Nuevo"
            },
            {
                nombre: "Libro2",
                precio: 12.5,
                libroUsado: "Usado"
            },
            {
                nombre: "Libro3",
                precio: 12.5,
                libroUsado: "Usado"
            },
        ]

        let arrayCarrito = [];

        let mensaje = "Productos disponibles: \n"
            for (let i = 0; i < arrayProductos.length; i++) {
                let producto = arrayProductos[i];
                mensaje += "Nombre del libro: " + producto.nombre + ", Precio: " + producto.precio + ", Estado: " + producto.libroUsado + "\n";
            }

        let finalizarCompra

        do {
            comprarLibro(); 
            } while (finalizarCompra == 1) 
            if (finalizarCompra == 2) {
                verCarrito();
            } else if (finalizarCompra == 0){
                alert("Lo sentimos. No contamos con ese libro por el momento. Gracias por visitarnos")
            }else if (finalizarCompra == 'cancel'){
                alert("Compra cancelada. Gracias por visitarnos!")
            } else {
                alert("Lo sentimos. No pudimos completar tu orden. Gracias por visitarnos")
            }

        function comprarLibro() { 
            let producto = prompt(mensaje + "\n" + "Indica el nombre del libro que quieres comprar")
            const libroBuscado = arrayProductos.find((libro)=> libro.nombre == producto)
                console.log(libroBuscado)

            if (libroBuscado == undefined) {
                finalizarCompra = 0
            } else {
                let comprarLibro = confirm("Libro encontrado! Deseas agregar el libro al carrito?")
                if (comprarLibro == true) {
                    arrayCarrito.push(libroBuscado)
                    aggregarCarrito()
                } else (
                    finalizarCompra = 'cancel'
                )
            }
        }

        function aggregarCarrito() {
            let mensajeAgregadoCarrito
            let lastItem = arrayCarrito.length - 1
            let esUsado = arrayCarrito[lastItem].libroUsado
            console.log(esUsado)
                if (esUsado == 'Usado') {
                    const descuento = 0.1
                    arrayCarrito[lastItem].precio = arrayCarrito[lastItem].precio * (1 - descuento)
                } else {
                    price = arrayCarrito[lastItem].precio
                }
            mensajeAgregadoCarrito = `El libro que has añadido al carrito es ${arrayCarrito[lastItem].nombre} y es ${arrayCarrito[lastItem].libroUsado}. El precio final es de ${arrayCarrito[lastItem].precio}. Recuerda que los libros Usados tienen 10% de descuento. \n`
            finalizarCompra = prompt(mensajeAgregadoCarrito + "Que deseas hacer a continuacion? \n 1) Seguir Comprando \n 2) Ver carrito")
        }

        function verCarrito() {
            let total = 0;
            let mensajeCarrito = "Productos agregados al carrito: \n"
                for (let i = 0; i < arrayCarrito.length; i++) {
                    let librosCarrito = arrayCarrito[i];
                    mensajeCarrito += "Nombre del libro: " + librosCarrito.nombre + ", Precio: " + librosCarrito.precio + ", Estado: " + librosCarrito.libroUsado + "\n"
                    total += arrayCarrito[i].precio
                }
            finalizarCompra = confirm(mensajeCarrito + "\n Total a pagar: " + total + "\n Deseas finalizar compra?")

            if (finalizarCompra == true) {
                alert("Tu compra fue exitosa. Gracias por visitarnos!")
            } else {
                alert("Compra cancelada. Gracias por visitarnos!")
            }
        }

    }
}