import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editarProductoAction} from "../actions/productoActions";
import {useHistory} from 'react-router-dom';

const EditarProducto = () => {

    const history = useHistory(); //para redireccionar
    const dispatch = useDispatch();

    //nuevo state de producto que se esta editando
    const [producto, guardarProducto] = useState({
        nombre:'',
        precio: ''
    })

    //producto a editar
    const productoeditar = useSelector(state => state.productos.productoeditar); //con esto va a estar disponible productoeditar
    //console.log(producto);
    //if(!producto) return null; //Si recarga la pagina en el formulario de editar no se mostrará nada. No se usa con Usestate (video leyendo los nuevos valores)

    //llenar el state automaticamente cuando cargue el formulario de edicion
    useEffect(()=>{
        guardarProducto(productoeditar); //con esto conseguimos q el nombre y precio del objeto a editar aparezcan en el state de "Components" en tools de chrome
    },[productoeditar]); //La fx useEffect se ejecuta toda vez que hay un cambio en productoeditar

    //Leer los datos del formulario (al escribir algo en el input, el state en react devtools debe cambiar en el componente EditarProducto
    const onChangeFormulario = (e)=>{
        guardarProducto({
                ...producto,
                [e.target.name]: e.target.value
            })
    }
    const {nombre, precio, id} = producto; //destructuring


    //Al enviar el formulario
    const submitEditarProducto = e  =>{
        e.preventDefault();

        dispatch(editarProductoAction(producto)); //se pasa el producto a editar al action. En esta parte se recarga la api, pero no se muestra en pantalla aun

        history.push('/'); //redicreccion componente principal

    }

    return (

        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Nuevo Producto
                        </h2>

                        <form
                             onSubmit={submitEditarProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre} //con esto aparece el nombre del producto que estamos editando en el input
                                    //onChange={e => guardarNombre(e.target.value)}
                                    onChange={onChangeFormulario}
                                />
                            </div>

                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                    value={precio}
                                   // onChange={e =>  guardarPrecio( Number(e.target.value) )}
                                    onChange={onChangeFormulario}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Guardar Cambios
                            </button>
                        </form>

                    </div>

                </div>
            </div>
        </div>

    );

};

export default EditarProducto;