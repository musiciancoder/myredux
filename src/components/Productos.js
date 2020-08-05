import React , {Fragment, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {obtenerProductosAction} from "../actions/productoActions";

const Productos = () => {

    const dispatch = useDispatch(); // useDispatch() siempre permite crear cuna variable dispatch

    useEffect( ()=> { //cuando recien se carga el componente...

        //consultar la api
        const cargarProductos = () => dispatch (obtenerProductosAction());// ... se pasa el payload de false a true
        cargarProductos();
    },[]);


    return(

<Fragment>

    <table className="table table-striped">
        <thead className="bg-primary table-dark">
        <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
        </tr>
        </thead>
        <tbody>

        </tbody>
    </table>

</Fragment>

    );

};

export default  Productos;

