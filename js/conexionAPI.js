
//Archivo con el código que nos permite hacer la conexion con la base de datos db.json
// Definimos una función asincrónica para listar productos
async function listarProductos(){
    //Realizamos una peticion de tipo GET usando el metodo fetch a la url con la info, archivo db.json
    const conexion = await fetch("https://669624d70312447373c14088.mockapi.io/alurageek/productos",{
        method:"GET", //Metodo de la peticion
        headers:{
        "Content-type":"application/json" //Especificamos que el contenido es de tipo JSON
        }
    });
    
    // Convertimos la respuesta de la petición a formato JSON y devolvemos la respuesta
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}


//Funcion para agregar un nuevo producto
async function enviarProducto(producto) {
    //Realizamos una peticion de tipo POST usando el metodo fetch a la url que apunta al archivo db.json
    const conexion = await fetch("https://669624d70312447373c14088.mockapi.io/alurageek/productos", {
        method: "POST", //Metodo de la peticion
        headers: {
            "Content-Type": "application/json" //Especificamos que el contenido es de tipo JSON
        },
        body: JSON.stringify(producto) // Convertimos el objeto producto a una cadena JSON y lo enviamos en el cuerpo de la peticion
    });

    // Si la conexión no es exitosa, lanzamos un error
    if (!conexion.ok) {
        throw new Error('Error al agregar el producto');
    }

    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}


//Funcion para eliminar un producto
async function eliminarProducto(id) {
    //Realizamos una peticion de tipo DELETE usando el metodo fetch mas la key id, a la url que apunta al archivo db.json
    const conexion = await fetch(`https://669624d70312447373c14088.mockapi.io/alurageek/productos/${id}`, {
        method: "DELETE", //Metodo de la peticion
        headers: {
            "Content-Type": "application/json" //Tipo de contenido
        }
    });

    //Si la conexión no es exitosa, lanzamos un error
    if (!conexion.ok) {
        throw new Error('Error al eliminar el producto');
    }

    return true;
}


// Exportamos un objeto que contiene las funciones
export const conexionAPI = {
    listarProductos,
    enviarProducto,
    eliminarProducto
};


