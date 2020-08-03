//ESTE ARCHIVO COMIBNA TODOS LOS REDUCERS

import {combineReducers} from 'redux';
import productosReducer from './productosReducer';

export default combineReducers({
    productos: productosReducer
});