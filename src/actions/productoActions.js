//Los actions son objetos q tienen atributos Type y Payload, se desencadenan con el evento de la vista y se pasan a los reducers

import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

import clienteAxios from '../config/axios';


// Crear nuevos productos; esta funcion se ocupa en los componentes
export function crearNuevoProductoAction(producto) { //Comparar esto con la fx definida en la vista (NuevoProducto.js)
    return async (dispatch) => {
        //  console.log(producto); //primero se prueba
        //esto esta en NuevoProducto.js     const agregarProducto = (producto) => dispatch(crearNuevoProductoAction(producto));
        dispatch(agregarProducto()); //cuando está cargando
        try { // insertar en la API
           await clienteAxios.post('/hola', producto); //insertamos el payload

           //Si sale bien, que actualice el state
            dispatch(agregarProductoExito(producto)); //si el producto se agrega con éxito

       //si hay un error
        } catch (error) {
            dispatch(agregarProductoError(true)); //si hay un error al cargar el producto
        }

    }

}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

const agregarProductoExito = producto => ({  //retorna el Action, que siempre es un objeto que contiene Type y Payload
    //Payload es siempre lo que viene de la vista que estamos queriendo agregar al estado, en este caso un nuevo producto
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})


const agregarProductoError = estado => ({ //retorna el Action, que siempre es un objeto que contiene Type y Payload
        type: AGREGAR_PRODUCTO_ERROR,
        payload: estado
})



