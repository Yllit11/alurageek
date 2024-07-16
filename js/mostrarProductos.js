import { conexionAPI } from "./conexionAPI.js";


// Seleccionamos el elemento donde se mostrarán los productos
const lista = document.querySelector("[data-lista]");

// Función que genera la estructura HTML de un producto
function construyeCard(url, titulo, precio, id) {
    const producto = document.createElement("li");
    producto.className = "productos_item";
    producto.innerHTML = `<img src="${url}" alt="${titulo}">
                          <div class="descripcion_producto">
                              <div class="detalles_producto">
                                  <h3>${titulo}</h3>
                                  <p>$ ${precio}</p>
                              </div>
                              <button data-id="${id}">
                                  <img src="./img/vector.png" alt="Eliminar">
                              </button>
                          </div>`;

    // Añadimos el evento de clic al botón de eliminar
    producto.querySelector('button').addEventListener('click', async () => {
        try {
            await conexionAPI.eliminarProducto(id);
            producto.remove(); // Elimina el elemento del DOM
            alert('Producto eliminado exitosamente');
        } catch (error) {
            // Redirigimos a la página error.html en caso de error
            window.location.href = '../pages/error.html';
        }
    });


    return producto;
}



// Función asincrónica para listar productos
async function listarProductos() {
    const listAPI = await conexionAPI.listarProductos();
    listAPI.forEach(producto => lista.appendChild(construyeCard(producto.url, producto.titulo, producto.precio, producto.id)));
}

// Llamamos a la función listarProductos para cargar los productos cuando se carga la página
listarProductos();



