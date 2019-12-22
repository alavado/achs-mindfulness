import React from 'react'
import audio1 from '../../assets/audio/audio1.ogg'
import audio2 from '../../assets/audio/audio2.ogg'
import './SeleccionEjercicio.css'

const SeleccionEjercicio = () => {
  return (
    <div className="contenedor">
      <div className="contenido-centrado">
        <h1>Selecciona la meditación</h1>
        <div className="contenedor-ejercicio">
          <h1>Título</h1>
          <p>Descripción</p>
          <audio id="audio1">
            <source src={audio1} type="audio/ogg" />
          </audio>
          <button onClick={() => document.getElementById("audio1").play()}>Play</button>
          <button onClick={() => document.getElementById("audio1").pause()}>Pausa</button>
        </div>
        <div className="contenedor-ejercicio">
          <h1>Título</h1>
          <p>Descripción</p>
          <audio id="audio2">
            <source src={audio2} type="audio/ogg" />
          </audio>
          <button onClick={() => document.getElementById("audio2").play()}>Play</button>
          <button onClick={() => document.getElementById("audio2").pause()}>Pausa</button>
        </div>
      </div>
    </div>
  )
}

export default SeleccionEjercicio
