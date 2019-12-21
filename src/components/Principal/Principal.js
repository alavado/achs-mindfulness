import React from 'react'
import { useHistory } from 'react-router-dom'
import './Principal.css'

const Principal = () => {

  const history = useHistory()
  const navegar = path => () => history.push(path)

  return (
    <div id="contenedor-principal">
      <h1>ACHS MINDFULNESS</h1>
      <div className="contenido-centrado">
        <div className="latido"></div>
        <button className="boton-meditar" onClick={navegar('/ejercicios')}>Meditar</button>
        <button onClick={navegar('/subjetiva/1')}>Mi estado de ánimo</button>
        <button onClick={navegar('/dass21')}>Cuestionario</button>
      </div>
    </div>
  )
}

export default Principal
