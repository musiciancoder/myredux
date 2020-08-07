//ESTE ARCHIVO COMIBNA TODOS LOS REDUCERS

import {combineReducers} from 'redux';
import productosReducer from './productosReducer';
import alertaReducer from "./alertaReducer";

export default combineReducers({
    productos: productosReducer,
    alerta: alertaReducer
});