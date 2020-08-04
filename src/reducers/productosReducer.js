//cada reducer tiene su propio state

import { AGREGAR_PRODUCTO,
 AGREGAR_PRODUCTO_EXITO,
 AGREGAR_PRODUCTO_ERROR } from '../types';

//Estado inicial
const initialState ={
    productos: [],
    error:null, //puede ser false tambien
    loading: false
}

//recibe state desde el store y action desde dispatchers/actions

export default function (state = initialState, action) {
    switch (action.type) { //
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
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload // este es el cambio de estado donde se agrega el error, se puede ver en Diff -->Tree en React Developre Tools
            }



        default:
            return state; //hacia store

    }

}