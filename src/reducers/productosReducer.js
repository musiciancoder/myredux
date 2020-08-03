//cada reducer tiene su propio state

import { AGREGAR_PRODUCTO,
 AGREGAR_PRODUCTO_EXITO,
 AGREGAR_PRODUCTO_ERROR } from '../types';

const initialState ={
    productos: [],
    error:null, //puede ser false tambien
    loading: false
}

//recibe state desde el store y action desde dispatchers

export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state; //hacia store

    }

}