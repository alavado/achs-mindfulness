import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Otras from '../Otras';
import Principal from '../Principal';
import Dass21 from '../Dass21';
import MedicionSubjetiva from '../MedicionSubjetiva';
import SeleccionEjercicio from '../SeleccionEjercicio';
import logo from '../../assets/Logo_ACHS.png'

function App() {
  return (
    <div id="contenedor-app">
      <img src={logo} alt="Logo ACHS" id="logo-achs" />
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/dass21/:paso" component={Dass21} />
        <Route exact path="/subjetiva/:paso" component={MedicionSubjetiva} />
        <Route exact path="/ejercicios" component={SeleccionEjercicio} />
        <Route exact path="/otras" component={Otras} />
      </Switch>
    </div>
  );
}

export default App;
