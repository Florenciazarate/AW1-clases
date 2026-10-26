function renderizarProductos(contenedor, productos) {
    let html = "";

    productos.forEach((producto) => {
        html += `<article>
                    <h3>${producto.nombre}</h3>
                    <picture>
                        <img src="./lindo-perro-retrato-aislado_23-2150194182.avif" alt="perro">
                    </picture>
                    <p>
                        ${producto.descripcion}
                    </p>
                    <ul>
                        <li>${producto.talles}</li>
                        <li>${producto.precio}</li>
                    </ul>
                    <button>añadir al carro</button>
                </article>`;
    });

contenedor.innerHTML= html
}

function filtrarPorTalle(productos,talleUsuario) {

    return productos.filter((producto) => {
        console.log(producto);
        
        return producto.talles.includes(talleUsuario.toUpperCase())
    })
    

}
export {renderizarProductos,filtrarPorTalle}