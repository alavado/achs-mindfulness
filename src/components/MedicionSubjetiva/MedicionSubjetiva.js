import React, { useState } from 'react'
import './MedicionSubjetiva.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaughBeam, faSmileBeam, faSmile, faMeh, faSadTear, faFrown, faAngry, faFlushed, faLaughSquint, faFrownOpen, faTired } from '@fortawesome/free-solid-svg-icons'

const MedicionSubjetiva = () => {

  const iconos = [
    faLaughSquint, // I. Pleasant activation (energetic, excited)
    faLaughBeam, // II. Activated pleasure (enthusiastic, elated)
    faSmileBeam, // III. Pleasure (satisfied, pleased)
    faSmile, // IV. Deactivated pleasure (serene, peaceful)
    faSmile, // V. Pleasant deactivation (placid, tranquil)
    faMeh, // VI. Deactivation (quiet, still)
    faFrownOpen, // VII. Unpleasant deactivation (sluggish, tired)
    faSadTear, // VIII. Deactivated displeasure (sad, gloomy)
    faFrown, // IX. Displeasure (unhappy, dissatisfied)
    faAngry, // X. Activated displeasure (distressed, upset)
    faTired, // XI. Unpleasant activation (frenzied, jittery)
    faFlushed // XII. Activation (aroused, activated)
  ].reverse()

  const [animoSeleccionado, setAnimoSeleccionado] = useState(iconos.length / 2)

  return (
    <div id="contenedor-medicion-subjetiva">
      <h1>¿Cómo te sientes<br />en este momento?</h1>
      <div id="contenedor-icono-estado-animo">
        <FontAwesomeIcon icon={iconos[animoSeleccionado]} size={"6x"} />
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
