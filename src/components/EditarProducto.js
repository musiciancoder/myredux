import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const EditarProducto = () => {

    //producto a editar
    const producto = useSelector(state => state.productos.productoeditar); //con esto va a estar disponible productoeditar
    //console.log(producto);
    if(!producto) return null; //Si recarga la pagina en el formulario de editar no se mostrará nada
    const {nombre, precio, id} = producto; //destructuring


    return (

        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Nuevo Producto
                        </h2>

                        <form
                            // onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre} //con esto aparece el nombre del producto que estamos editando en el input
                                    //          onChange={e => guardarNombre(e.target.value)}
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
                                    //        onChange={e =>  guardarPrecio( Number(e.target.value) )}
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