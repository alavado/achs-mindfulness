import React, { useState } from 'react'
import './Dass21.css'
import { preguntas } from '../../helpers/dass21'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck as iconoAlternativaMarcada } from '@fortawesome/free-solid-svg-icons'

const alternativas = [
  'No describe nada de lo que me pasó o sentí en la semana',
  'Sí, esto me pasó o lo sentí en alguna medida o en algún momento',
  'Sí, esto me pasó bastante o lo sentí muchas veces',
  'Sí, esto me pasó mucho, o casi siempre'
]

const Dass21 = ({ match }) => {

  const history = useHistory()
  const { paso } = match.params
  const [alternativaSeleccionada, setAlternativaSeleccionada] = useState(null)

  const irAPaso = paso => () => {
    setAlternativaSeleccionada(null)
    history.push(`/dass21/${paso}`)
  }

  if (paso === '0') {
    return (
      <div className="contenedor">
        <div className="contenido-centrado cuestionario">
          <h1>Cuestionario semanal</h1>
          <div className="instrucciones">
            <p>Lea cada frase e indique en qué medida esa frase describe lo que le pasó o sintió durante la última semana</p>
            <p>No hay respuestas buenas o malas</p>
            <p>Responda según su primera impresión, no se detenga demasiado en cada frase</p>
          </div>
          <button onClick={irAPaso(1)}>Comenzar</button>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="contenedor">
        <div className="contenido-centrado cuestionario">
          <h1>{preguntas[Number(paso) - 1]}</h1>
          <ul>
            {alternativas.map((a, i) => (
              <li key={`alternativa-${i}`} onClick={() => setAlternativaSeleccionada(i)}>
                <span>{alternativaSeleccionada === i && <FontAwesomeIcon icon={iconoAlternativaMarcada} />}</span>{a}
              </li>
            ))}
          </ul>
          <button onClick={irAPaso(Number(paso) + 1)}>Siguiente</button>
          <div className="progreso-cuestionario">
            <p>Pregunta {paso} de {preguntas.length}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Dass21
