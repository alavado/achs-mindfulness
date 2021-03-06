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
  const [respuestas, setRespuestas] = useState(preguntas.map(p => ({...p, respuesta: 0})))

  const irAPaso = paso => () => {
    setAlternativaSeleccionada(null)
    if (paso <= preguntas.length) {
      if (paso > 1) {
        let nuevasRespuestas = [...respuestas]
        nuevasRespuestas[paso - 2].respuesta = alternativaSeleccionada
        setRespuestas(nuevasRespuestas)
      }
      history.push(`/dass21/${paso}`)
    }
    else {
      history.push('/')
    }
  }

  return (
    <div className="contenedor">
      <div className="contenido-centrado cuestionario">
        {paso === '0' ?
          <>
            <h1>Cuestionario semanal</h1>
            <div className="instrucciones">
              <p>Lea cada frase e indique en qué medida esa frase describe lo que le pasó o sintió durante la última semana</p>
              <p>No hay respuestas buenas o malas</p>
              <p>Responda según su primera impresión, no se detenga demasiado en cada frase</p>
            </div>
            <button onClick={irAPaso(1)}>Comenzar</button>
          </> :
          <>
            <h1>{preguntas[Number(paso) - 1].enunciado}</h1>
            <ul>
              {alternativas.map((a, i) => (
                <li
                  key={`alternativa-${i}-${paso}`}
                  onClick={() => setAlternativaSeleccionada(i)}
                  style={{ animationDelay: `${0.75 + 0.1 * i}s` }}
                >
                  <span>{alternativaSeleccionada === i && <FontAwesomeIcon icon={iconoAlternativaMarcada} />}</span>{a}
                </li>
              ))}
            </ul>
            <button onClick={irAPaso(Number(paso) + 1)} disabled={alternativaSeleccionada === null}>Siguiente</button>
            <div className="progreso-cuestionario">
              <p>Pregunta {paso} de {preguntas.length}</p>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Dass21
