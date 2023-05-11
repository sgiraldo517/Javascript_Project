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
    if(tipoDeUsuario == 'vendedor') {


        function ingresarNuevaVenta() {

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
            
            alert("Tu venta quedo agregada \n 1) Nombre del libro: " + name + "\n 2) Precio: " + price * (1 + descuento + iva) + " \n 3) Tipo de libro: " + libroUsado)         
            
            agregarOtro = prompt("Quieres agregar otra venta? \n 1) Si \n 2) No")
            return agregarOtro
        
        }

        do {
        ingresarNuevaVenta(); 
        } while (agregarOtro == 1)

        if (agregarOtro == 2) {
            alert('Gracias por visitarnos!')
        }

    } else if(tipoDeUsuario == 'comprador') {

        let carrito;
        comprarLibro()
        alert("Compra exitosa. Total a pagar: " + carrito + ". Gracias por visitarnos")

        function comprarLibro() { 
            let producto = prompt("Indica el tipo de libro que quieres comprar \n 1) Nuevo \n 2) Usado")
            let cantidad = parseInt(prompt("Indica la cantidad de libros que quieres comprar?"))
            let price;
            let descuento;
            const iva = 0.15
        
                if(producto == "1") {
                    descuento = 0;
                    price = 15 * (1 + descuento + iva);
                } else if(producto == "2") {
                    descuento = 0.1;
                    price = 10 *(1 + descuento + iva);
                }
                
            return carrito = cantidad * price; 
            }
    }
    
}





