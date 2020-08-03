import React from 'react';
import Header from "./components/Header";
import Productos from "./components/Productos";
import NuevoProductos from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() { //git add *
  return (
  <Router>
    <Header />
    <div className="container">
      <Switch>
        <Route exact path={"/"} component={Productos} />
        <Route exact path={"/productos/nuevo"} component={NuevoProductos} />
        <Route exact path={"/productos/editar/:id"} component={EditarProducto} />
      </Switch>
    </div>

  </Router>
  );
}

export default App;
