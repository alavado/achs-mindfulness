import React, { useState } from 'react'
import './MedicionSubjetiva.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDizzy, faTired, faFrown, faMeh, faSmile, faGrin, faLaughBeam } from '@fortawesome/free-solid-svg-icons'

const MedicionSubjetiva = () => {

  const [animoSeleccionado, setAnimoSeleccionado] = useState(0)

  const iconos = [
    faDizzy, faTired, faFrown, faMeh, faSmile, faGrin, faLaughBeam
  ]

  return (
    <div id="contenedor-medicion-subjetiva">
      <h1>¿Cómo te sientes<br />en este momento?</h1>
      <div id="contenedor-icono-estado-animo">
        <FontAwesomeIcon icon={iconos[animoSeleccionado]} size={"8x"} />
      </div>
      <input
        id="slider-subjetivo"
        type="range"
        min={0}
        max={iconos.length - 1}
        step={1}
        value={animoSeleccionado}
        onChange={e => setAnimoSeleccionado(e.target.value)}
      />
      <button>Así me siento</button>
    </div>
  )
}

export default MedicionSubjetiva
