import React from 'react';
import {useDispatch, useSelector} from "react-redux";

//Actions de Redux
import {crearNuevoProductoAction} from '../actions/productoActions'

const NuevoProductos= () => {

    //utilizar useDispatch y te crea la función

    const dispatch = useDispatch();

    //la vista despacha la acción, al pasar la funcion definida en los actions comoparametro a dispatch
    //se ejecuta mas abajo al hacer clich en boton submit
    const agregarProducto =() => dispatch ( crearNuevoProductoAction ());

    //cuando haga click en boton submit
   const submitNuevoProducto =e =>{
       e.preventDefault();

       //validar formulario

       //si no hay erorres

       //crear el nuevo producto
       agregarProducto();
    }

    return(
      <div className="row justify-content-center">
          <div className="col-md-8">
              <div className="card">
                  <div className="card-body">
                      <h2 className="text-center mb-4 font-weight-bold">
                          Agregar Nuevo Producto
                      </h2>

                      <form
                          onSubmit={submitNuevoProducto}
                      >
                          <div className="form-group">
                              <label>Nombre Producto</label>
                              <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Nombre Producto"
                        //          name="nombre"
                         //         value={nombre}
                        //          onChange={e => guardarNombre(e.target.value)}
                              />
                          </div>

                          <div className="form-group">
                              <label>Precio Producto</label>
                              <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Precio Producto"
                       //           name="precio"
                        //          value={precio}
                          //        onChange={e =>  guardarPrecio( Number(e.target.value) )}
                              />
                          </div>

                          <button
                              type="submit"
                              className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                          >Agregar</button>
                      </form>

                  </div>

              </div>
          </div>
      </div>

    );

};

export default NuevoProductos ;