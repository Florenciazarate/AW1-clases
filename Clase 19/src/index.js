import { productosMascotas } from "./productos.js";
import { filtrarPorTalle, renderizarProductos } from "./funciones.js";

const contenedor = document.getElementById("contenedor-productos");
const botonEvento = document.getElementById('boton-evento')
const dialogo = document.getElementById('dialogo')

console.log(contenedor);


renderizarProductos(contenedor, productosMascotas)

const botonesProducto = document.querySelectorAll('.boton-agregar-producto')
console.log(botonesProducto, "as");
filtrarPorTalle(productosMascotas, "S")
botonesProducto.forEach((boton) => {


    boton.addEventListener('click', (evento) => {
        const idProducto = parseInt(boton.dataset.id)
    })

})


console.log(botonesProducto);
