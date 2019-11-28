import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Otras from '../Otras';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={() =>
        <div>
          ACHS MINDFULNESS
        </div>
      } />
      <Route exact path="/otras" component={Otras} />
    </Switch>
  );
}

export default App;
