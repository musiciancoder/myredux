import React from 'react';
import Header from "./components/Header";
import Productos from "./components/Productos";
import NuevoProductos from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Redux
import {Provider} from 'react-redux';
import store from './store';  //porque el store se esta exportando con default no usa llaves


function App() {
  return (
  <Router>
    <Provider store={store}>
    <Header />
    <div className="container">
      <Switch>
        <Route exact path={"/"} component={Productos} /> {/*nombre,precio,acciones*/}
        <Route exact path={"/productos/nuevo"} component={NuevoProductos} />
        <Route exact path={"/productos/editar/:id"} component={EditarProducto} />
      </Switch>
    </div>
    </Provider>
  </Router>
  );
}

export default App;
