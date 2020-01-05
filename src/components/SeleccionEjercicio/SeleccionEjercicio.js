import React from 'react'
import audio1 from '../../assets/audio/audio1.ogg'
import audio2 from '../../assets/audio/audio2.ogg'
import './SeleccionEjercicio.css'

const meditaciones = [
  {
    titulo: 'Meditación Natural',
    descripcion: 'Una meditacion buena'
  },
  {
    titulo: 'Meditación Corporal',
    descripcion: 'Una meditacion de cuerpo entero'
  }
]

const SeleccionEjercicio = () => {
  return (
    <div className="contenedor">
      <div className="contenido-centrado">
        <h1>Selecciona la meditación</h1>
        {meditaciones.map(({ titulo, descripcion }) => (
          <div className="contenedor-ejercicio">
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
            <audio id="audio1">
              <source src={audio1} type="audio/ogg" />
            </audio>
            <button onClick={() => document.getElementById("audio1").play()}>Play</button>
            <button onClick={() => document.getElementById("audio1").pause()}>Pausa</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SeleccionEjercicio
