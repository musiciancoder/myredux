//Los actions son objetos q tienen atributos Type y Payload, se desencadenan con el evento de la vista y se pasan a los reducers

import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR, COMENZAR_EDICION_PRODUCTO


} from '../types';

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';


// Crear nuevos productos; esta funcion se ocupa en las vistas (NuevoProducto.ja)
export function crearNuevoProductoAction(producto) { //Comparar esto con la fx definida en la vista (NuevoProducto.js)
    return async (dispatch) => {
        //  console.log(producto); //primero se prueba
        //esto esta en NuevoProducto.js     const agregarProducto = (producto) => dispatch(crearNuevoProductoAction(producto));
        dispatch(agregarProducto()); //cuando está cargando
        try { // insertar en la API
            await clienteAxios.post('/productos', producto); //insertamos el payload

            //Si sale bien, que actualice el state
            dispatch(agregarProductoExito(producto)); //si el producto se agrega con éxito

            //si hay un error
        } catch (error) {
            dispatch(agregarProductoError(true)); //si hay un error al cargar el producto

            //alerta de error
            Swal.fire(
                'error',
                'Hubo un error',
                'error',
            )
        }
        //Alerta
        Swal.fire(
            'Correcto',
            'El producto se agregó correctamente',
            'success',
        )
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
});

//----------------------------------------------------------------------------


//Funcion que descarga los productos de la base de datos, llamada en la vista
export function obtenerProductosAction() {
    return async dispatch => {
        dispatch(descargarProductos());

        try {
            const respuesta = await clienteAxios.get('/productos');
            // console.log(respuesta.data);
            dispatch(descargarProductosExitosa(respuesta.data))
        } catch (error) {
            console.log(error);
            dispatch(descargarProductosError()); //con JSONSERVER no pasar error como argumento!! con node.js sí pasarlo
        }
    }
}

//cuando recien se carga la pagina, se pasa el payload de false a true
const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})

const descargarProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

const descargarProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})

//---------------Selecciona y elimina el producto

export function borrarProductoAction(id) {
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id));
        //console.log(id); Hasta esta parte probar primero con redux dev

        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch( eliminarProductoExito() );

            // Si se elimina, mostrar alerta
            Swal.fire(
                'Eliminado',
                'El producto se eliminó correctamente',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch( eliminarProductoError() );
        }



    }
}

 const obtenerProductoEliminar = id =>({
    type:OBTENER_PRODUCTO_ELIMINAR,
    payload:id
});

const eliminarProductoExito =() =>({
    type: PRODUCTO_ELIMINADO_EXITO

})

const eliminarProductoError =()=>({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload:true
})

//-------------------Pasar un producto al formulario de editar producto (cuando se hace click en "editar"
export function obtenerProductoEditar(producto){
    return(dispatch)=>{
        dispatch(obtenerProductoEditarAction(producto))

       // NOTAR QUE EN ESTA PARTE NO HAY TRY CATCH PORQUE SOLO ESTÁ AGREGANDO AL STATE EL PRODUCTO A EDITAR AL HACER CLICK EN EDITAR (SE PUEDE VER CON DEV TOOLS)

    }

}

const obtenerProductoEditarAction = producto =>({
type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
})

//Edita un registro en la api y en el state cuando se envía el formulario de edicion
export function editarProductoAction(producto) {
return async (dispatch)=>{
    dispatch(editarProducto());

    try {
       await clienteAxios.put(`/productos/${producto.id}`, producto);
       // console.log(producto);
        dispatch(editarProductoExito(producto))
    } catch (error) {
        //console.log(error);
        dispatch(editarProductoError());
    }
}
}

const editarProducto = () =>({
    type: COMENZAR_EDICION_PRODUCTO
});

const editarProductoExito = (producto) =>({
    type:PRODUCTO_EDITADO_EXITO,
    payload:producto
})

const editarProductoError  = () => ({
    type:PRODUCTO_EDITADO_ERROR,
    payload: true
})