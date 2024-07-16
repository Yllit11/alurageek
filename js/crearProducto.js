import { conexionAPI } from "./conexionAPI.js";


// Seleccionamos el formulario y añadimos un evento 'submit'
document.querySelector('.formulario').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevenimos el comportamiento por defecto del formulario (que recarga la página)

    // Obtenemos los valores de los campos del formulario
    const titulo = document.querySelector('[data-titulo]').value;
    const precio = document.querySelector('[data-precio]').value;
    const url = document.querySelector('[data-url]').value;

    
    // Verificamos que todos los campos tengan un valor
    if (titulo && precio && url) {
        // Creamos un objeto con los datos del nuevo producto
        const nuevoProducto = {
            titulo,
            precio,
            url
        };

        try {
            // Llamamos a la función enviarProducto de conexionAPI para enviar el nuevo producto
            await conexionAPI.enviarProducto(nuevoProducto);
            // Mostramos una alerta indicando que el producto se ha agregado correctamente
            alert('Producto agregado exitosamente');
            // Recargamos la página después de agregar el producto
            window.location.reload();
        } catch (error) {
            // Redirigimos a la página error.html en caso de error
            window.location.href = '../pages/error.html';
        }
    } else {
        // Mostramos una alerta si algún campo está vacío
        alert('Todos los campos son obligatorios');
    }
});



