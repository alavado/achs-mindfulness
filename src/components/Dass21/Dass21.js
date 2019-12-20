import React from 'react'
import './Dass21.css'
import { preguntas } from '../../helpers/dass21'

const Dass21 = () => {
  return (
    <div>
      <div className="instrucciones">
        <p>Por favor lea cada frase y marque el número 0, 1, 2 o 3 para indicar en qué medida esa frase describe lo que le pasó o sintió durante la última semana.</p>
        <p>No hay respuestas buenas o malas.</p>
        <p>Marque según su primera impresión, no se detenga demasiado en cada frase.</p>
        <ul>
          <li>0  No describe nada de lo que me pasó o sentí en la semana.</li>
          <li>1  Sí, esto me pasó o lo sentí en alguna medida o en algún momento.</li>
          <li>2  Sí, esto me pasó bastante o lo sentí muchas veces.</li>
          <li>3  Si, esto me pasó mucho, o casi siempre.</li>
        </ul>
      </div>
      {preguntas.map((pregunta, i) => (
        <div
          key={`contenedor-pregunta-${i + 1}`}
          className="contenedor-pregunta"
        >
          <p>{pregunta}</p>
        </div>
      ))}
    </div>
  )
}

export default Dass21
