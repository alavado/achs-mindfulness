import React from 'react'
import audio1 from '../../assets/audio/audio1.ogg'

const Meditacion = () => {
  return (
    <div className="contenedor">
      <div className="contenido-centrado">
          <audio id="audio1">
            <source src={audio1} type="audio/ogg" />
          </audio>
          <button onClick={() => document.getElementById("audio1").play()}>Play</button>
          <button onClick={() => document.getElementById("audio1").pause()}>Pausa</button>
      </div>
    </div>
  )
}

export default Meditacion
