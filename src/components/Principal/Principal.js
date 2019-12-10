import React from 'react'
import { useHistory } from 'react-router-dom'
import './Principal.css'

const Principal = () => {

  const history = useHistory()
  const navegar = path => () => history.push(path)

  return (
    <div id="contenedor-principal">
      <div>ACHS MINDFULNESS</div>
      <div className="contenido-centrado">
        <button onClick={navegar('/ejercicios')}>Realizar ejercicio</button>
        <button onClick={navegar('/subjetiva/1')}>Indicar estado de ánimo</button>
        <button onClick={navegar('/dass21')}>Responder DASS-21</button>
      </div>
    </div>
  )
}

export default Principal
