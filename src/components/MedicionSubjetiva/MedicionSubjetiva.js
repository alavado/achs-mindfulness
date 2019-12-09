import React, { useState } from 'react'
import './MedicionSubjetiva.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { animos } from '../../helpers/animo'
import BotonVolver from '../BotonVolver'

const MedicionSubjetiva = () => {

  const [animoSeleccionado, setAnimoSeleccionado] = useState(animos.length / 2 + 1)

  return (
    <>
      <BotonVolver />
      <div id="contenedor-medicion-subjetiva">
        <h1>¿Cómo te sientes?</h1>
        <div id="contenedor-icono-estado-animo">
          <FontAwesomeIcon icon={animos[animoSeleccionado].icono} size={"6x"} />
        </div>
        <input
          id="slider-subjetivo"
          type="range"
          min={0}
          max={animos.length - 1}
          step={1}
          value={animoSeleccionado}
          onChange={e => setAnimoSeleccionado(e.target.value)}
        />
        <p>Me siento {animos[animoSeleccionado].nombre}</p>
        <button>Guardar</button>
      </div>
    </>
  )
}

export default MedicionSubjetiva
