import React, { useState } from 'react'
import './MedicionSubjetiva.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { animos } from '../../helpers/animo'
import BotonVolver from '../BotonVolver'
import { faFrown, faSmile, faMeh } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'

const animosClasificados = {
  malos: ['Cansado', 'Desganado', 'Triste', 'Irritado', 'Nervioso'],
  meh: ['Ocioso', 'Cansado', 'Nervioso', 'Alerta'],
  buenos: ['Eufórico', 'Entusiasmado', 'Feliz', 'Relajado', 'Tranquilo']
}

const MedicionSubjetiva = ({ match }) => {

  const history = useHistory()
  const { paso } = match.params
  const [animoGeneral, setAnimoGeneral] = useState('no especificado')

  const irAPaso2 = animo => () => {
    setAnimoGeneral(animo)
    history.push('/subjetiva/2')
  }

  return (
    <>
      <BotonVolver />
      <div id="contenedor-medicion-subjetiva">
        <h1>¿Cómo te sientes?</h1>
        {paso === '1' ?
          <div id="contenedor-iconos-estado-animo">
            <FontAwesomeIcon onClick={irAPaso2('malos')} icon={faFrown} size={"5x"} />
            <FontAwesomeIcon onClick={irAPaso2('meh')} icon={faMeh} size={"5x"} />
            <FontAwesomeIcon onClick={irAPaso2('buenos')} icon={faSmile} size={"5x"} />
          </div> :
          <>
            <div id="contenedor-iconos-estado-animo">
              {animosClasificados[animoGeneral]
                .map(nombre => animos.find(animo => animo.nombre === nombre))
                .map(({icono, nombre}, i) => (
                  <div key={`animo-${i}`} className="contenedor-estado-animo">
                    <FontAwesomeIcon icon={icono} size={"5x"} />
                    <p>{nombre}</p>
                  </div>
                ))
              }
            </div>
            <button>Guardar</button>
          </>
        }
      </div>
    </>
  )
}

export default MedicionSubjetiva
