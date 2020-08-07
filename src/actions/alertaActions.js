import {MOSTRAR_ALERTA, OCULTAR_ALERTA} from "../types";

//Muestra alerta
export function mostrarAlerta(alerta){ //llamada en NuevoProducto, al hacer click en enviar formulario
    return (dispatch) => {
        dispatch(crearAlerta(alerta))
    }
}

const crearAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})
