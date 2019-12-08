import React from 'react'
import { Link } from 'react-router-dom'
import './Principal.css'

const Principal = () => {
  return (
    <div>
      <div>ACHS MINDFULNESS</div>
      <button><Link to="/dass21">dasd</Link></button>
      <button><Link to="/subjetiva">medición subjetiva</Link></button>
      <button><Link to="/ejercicios">ejercicio</Link></button>
    </div>
  )
}

export default Principal
