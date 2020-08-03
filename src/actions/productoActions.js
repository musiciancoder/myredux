//Los actions se desencadenan con el evento de la vista y se pasan a los reducers

import { AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR } from '../types';


// Crear nuevos productos; esta funcion se ocupa en los componentes
export  function  crearNuevoProductoAction() {
    return()=>{
        console.log('desde action')
    }

}
