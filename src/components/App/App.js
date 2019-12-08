import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Otras from '../Otras';
import Principal from '../Principal';
import Dass21 from '../Dass21';
import MedicionSubjetiva from '../MedicionSubjetiva';
import SeleccionEjercicio from '../SeleccionEjercicio';

function App() {
  return (
    <div id="contenedor-app">
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/dass21" component={Dass21} />
        <Route exact path="/subjetiva" component={MedicionSubjetiva} />
        <Route exact path="/ejercicios" component={SeleccionEjercicio} />
        <Route exact path="/otras" component={Otras} />
      </Switch>
    </div>
  );
}

export default App;
