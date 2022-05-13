const listaUsuarios = () => fetch("https://wenceslao-alura-geek.herokuapp.com/usuarios").then((respuesta) => respuesta.json());

export const clientServices = {
    listaUsuarios,
}