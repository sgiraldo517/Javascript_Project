const arrayLibros = [
    {
        id: 1,
        nombre: "Orgullo y prejuicio",
        autor: "Jane Austen",
        precio: 17.25,
        libroUsado: "Nuevo",
        img: "../resources/img/orgullo-y-prejuicio.jpg"
    },
    {
        id: 2,
        nombre: "Pensar rapiso, pensar despacio",
        autor: "Daniel Kahneman",
        precio: 12.5,
        libroUsado: "Usado",
        img: "../resources/img/books-2596809_1920.jpg"
    },
    {
        id: 3,
        nombre: "El progreso del amor",
        autor: "Alice Munro",
        precio: 12.5,
        libroUsado: "Usado",
        img: "../resources/img/el-progreso-del-amor.jpg"
    },
    {
        id: 4,
        nombre: "Habitos Atomicos",
        autor: "James Clear",
        precio: 17.25,
        libroUsado: "Nuevo",
        img: "../resources/img/bleer01.jpg"
    }
]


let carrito = []

const libroagregado = document.getElementById("alerta_libroagregado")
libroagregado.addEventListener("click", () => {
        Swal.fire(
            'Gracias!',
            'Tu producto fue añadido al carrito',
            'success'
        )
    }
)








