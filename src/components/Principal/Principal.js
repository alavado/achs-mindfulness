import React from 'react'
import { useHistory } from 'react-router-dom'
import './Principal.css'

const Principal = () => {

  const history = useHistory()
  const navegar = path => () => history.push(path)

  return (
    <div id="contenedor-principal">
      <div>ACHS MINDFULNESS</div>
      <button onClick={navegar('/dass21')}>Responder DASS-21</button>
      <button onClick={navegar('/subjetiva')}>Indicar estado de ánimo</button>
      <button onClick={navegar('/ejercicios')}>Realizar ejercicio</button>
    </div>
  )
}

export default Principal
