import React, { useState } from 'react'
import './MedicionSubjetiva.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { animos } from '../../helpers/animo'
import { faFrown, faSmile, faMeh, faSortAmountDown } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'
import Emoji from 'react-emojis'

const animosClasificados = {
  malos: ['Cansado', 'Desganado', 'Triste', 'Irritado', 'Nervioso'],
  meh: ['Ocioso', 'Cansado', 'Nervioso', 'Alerta'],
  buenos: ['Eufórico', 'Entusiasmado', 'Feliz', 'Relajado', 'Tranquilo']
}

const MedicionSubjetiva = ({ match }) => {

  const history = useHistory()
  const { paso } = match.params
  const [animoGeneral, setAnimoGeneral] = useState(null)
  const [animoSeleccionado, setAnimoSeleccionado] = useState(null)

  if (paso === '2' && !animoGeneral) {
    history.push('/subjetiva/1')
    return null
  }

  const irAPaso2 = animo => () => {
    setAnimoGeneral(animo)
    history.push('/subjetiva/2')
  }

  return (
    <>
      <div id="contenedor-medicion-subjetiva">
        <h1>Me siento...</h1>
        {paso === '1' ?
          <div className="contenedor-iconos-estado-animo">
            <button className="boton-estado-animo" onClick={irAPaso2('malos')}>
              <Emoji emoji="slightly-frowning-face" size="70" />
            </button>
            <button className="boton-estado-animo" onClick={irAPaso2('meh')}>
              <Emoji emoji="neutral-face" size="70" />
            </button>
            <button className="boton-estado-animo" onClick={irAPaso2('buenos')}>
              <Emoji emoji="slightly-smiling-face" size="70" />
            </button>
          </div> :
          <>
            <div className="contenedor-iconos-estado-animo">
              {animosClasificados[animoGeneral]
                .map(nombre => animos.find(animo => animo.nombre === nombre))
                .map(({icono, nombre}, i) => (
                  <button
                    key={`animo-${i}`}
                    className={nombre === animoSeleccionado ? "boton-estado-animo" : "boton-estado-animo"}
                    style={animosClasificados[animoGeneral].length % 2 === 0 ? {flexBasis: 150} : {}}
                    onClick={e => {
                      history.push('/')
                      setAnimoSeleccionado(nombre)
                    }}
                  >
                    <Emoji emoji={icono} size="70" />
                    <p>{nombre}</p>
                  </button>
                ))
              }
            </div>
          </>
        }
      </div>
    </>
  )
}

export default MedicionSubjetiva
