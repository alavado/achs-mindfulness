import React from 'react'
import { Link } from 'react-router-dom'
import './Principal.css'

const Principal = () => {

  return (
    <div id="contenedor-principal">
      <Link to="/dass21/0" id="link-dass21"><button>DASS21</button></Link>
      <h1>Mindfulness</h1>
      <div className="contenido-centrado">
        <Link to="/ejercicios">
          <div className="latido"></div>
          <button className="boton-meditar">Meditar</button>
        </Link>
        <Link to="/dass21/0"><button>Cuestionario semanal</button></Link>
      </div>
    </div>
  )
}

export default Principal
