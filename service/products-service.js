const listaProductos = () => fetch("https://wenceslaojanda.github.io/alurageek/productos").then((respuesta) => respuesta.json());

const listaCategoria = () => fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());

const crearProducto = (nombre, descripcion, precio, imagen, categoria) => {
 return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id: uuid.v4(), nombre, descripcion, precio, imagen, categoria}),
    });
};

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => respuesta.json());
};

const actualizarProducto = (id, nombre, descripcion, precio, imagen, categoria) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, descripcion, precio, imagen, categoria})
    }).then((respuesta) => respuesta)
    .catch((err) => console.log(err));
} 

export const productServices = {
    listaProductos, 
    listaCategoria,
    crearProducto,
    detalleProducto,
    actualizarProducto,
}





