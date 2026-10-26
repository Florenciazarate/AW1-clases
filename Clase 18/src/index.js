import {productosMascotas, categorias} from "./productos";
import { filtrarPorTalle, renderizarProductos } from "./funciones.js";

const contenedor = document.getElementById("contenedor-productos");
renderizarProductos (contenedor,productosMascotas)
filtrarPorTalle(productosMascotas, "S")