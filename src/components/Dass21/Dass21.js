import React from 'react'
import './Dass21.css'
import { preguntas } from '../../helpers/dass21'

const Dass21 = () => {
  return (
    <div className="contenedor">
      <div className="contenido-centrado cuestionario">
        <h1>Cuestionario semanal</h1>
        <div className="instrucciones">
          <p>Lea cada frase e indique en qué medida esa frase describe lo que le pasó o sintió durante la última semana.</p>
          <p>No hay respuestas buenas o malas.</p>
          <p>Marque según su primera impresión, no se detenga demasiado en cada frase.</p>
        </div>
        <button>Comenzar</button>
        {/* {preguntas.map((pregunta, i) => (
          <div
            key={`contenedor-pregunta-${i + 1}`}
            className="contenedor-pregunta"
          >
            <p>{pregunta}</p>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default Dass21
