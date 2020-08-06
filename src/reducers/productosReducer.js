//cada reducer tiene su propio state

import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR,
    OBTENER_PRODUCTO_EDITAR

} from '../types';

//Estado inicial
const initialState = {
    productos: [],
    error: null, //puede ser false tambien
    loading: false,
    productoeliminar:null,
    productoeditar: null
}

//recibe state desde el store y action desde dispatchers/actions

export default function (state = initialState, action) {
    switch (action.type) { //
        case COMENZAR_DESCARGA_PRODUCTOS:
        case AGREGAR_PRODUCTO: //cuando está cargando el cambio de estado
            return {
                ...state,
                loading: action.payload   // este es el cambio de estado para la carga (de false a true indica que se esta cargando), se puede ver en Diff -->Tree en React Developre Tools
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                productos: [...state.productos, action.payload] // este es el cambio de estado donde se agrega el producto, se puede ver en Diff -->Tree en React Developre Tools
            }
        case DESCARGA_PRODUCTOS_ERROR:
        case AGREGAR_PRODUCTO_ERROR:
        case PRODUCTO_EDITADO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload // este es el cambio de estado donde se agrega el error, se puede ver en Diff -->Tree en React Developre Tools
            }
        case DESCARGA_PRODUCTOS_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                productos: action.payload //con esto se agregan los productos, se pueden ver como JSON con devtools
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state,
                productoeliminar: action.payload
            }
        case PRODUCTO_EDITADO_EXITO:
            return {
                ...state,
                productos: state.productos.filter(producto=>producto.id !==
                    state.productoeliminar),
                productoeliminar: null   //notar que sin esto el estado de productoeliminar en dev tools sigue tomando el id del objeto que eliminamos
            }
        case  OBTENER_PRODUCTO_EDITAR:
            return {
                ...state,
                productoeditar: action.payload
            }

        default:
            return state; //hacia store

    }

}