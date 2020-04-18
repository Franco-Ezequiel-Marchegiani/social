import React, {Component} from 'react';
import Home from './Home'
import Usuario from './Usuario'
import DetallePerfil from './DetallePerfil'
import {BrowserRouter, Route, Link} from "react-router-dom";



class App extends Component{
  constructor(){
    super()
  }

  render (){
    
    return (
      <div className="App">

        <BrowserRouter>
            <Link to={'/usuario'} >Tu perfil</Link> 
            <Route path="/" exact component={Home} />
            <Route path="/usuario" exact component={Usuario} />
            <Route path="/detalle-perfil/:id" exact component={DetallePerfil} />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;