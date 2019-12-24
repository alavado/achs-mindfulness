import React from 'react'
import { Link } from 'react-router-dom'
import './Principal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList as iconoDass21 } from '@fortawesome/free-solid-svg-icons'

const Principal = () => {

  return (
    <div id="contenedor-principal">
      <Link to="/dass21/0" id="link-dass21"><FontAwesomeIcon icon={iconoDass21} size="2x" /></Link>
      <h1>Mindfulness</h1>
      <div className="contenido-centrado">
        <Link to="/ejercicios">
          <div className="latido"></div>
          <button className="boton-meditar">Meditar</button>
        </Link>
        <Link to="/subjetiva/1"><button>Estado de ánimo</button></Link>
      </div>
    </div>
  )
}

export default Principal
