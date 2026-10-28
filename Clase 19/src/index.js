import {productosMascotas} from "./productos.js";
import { filtrarPorTalle, renderizarProductos } from "./funciones.js";

const contenedor = document.getElementById("contenedor-productos");
const botonEvento= document.getElementById('boton-evento')
const dialogo= document.getElementById('dialogo')

renderizarProductos (contenedor,productosMascotas)
filtrarPorTalle(productosMascotas, "S")

botonEvento.addEventListener('click', (evento)=> {
        dialogo.showModal()
})
contenedor.querySelectorAll('.boton-agregar-producto')
const botonesProducto= contenedor.querySelector
console.log(botonEvento)