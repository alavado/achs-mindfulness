import React from 'react'
import './Otras.css'
import uiMeditacionBuddhify from './assets/Screenshot_20191128-120338_buddhify.jpg'
import uiMeditacionCalm from './assets/Screenshot_20191128-120416_Calm.jpg'
import uiMeditacionDailyMindfulness from './assets/Screenshot_20191128-120640_Daily Mindfulness.jpg'
import uiMeditacionHeadspace from './assets/Screenshot_20191128-120757_Headspace.jpg'
import uiMeditacionInsightTimer from './assets/Screenshot_20191128-120847_Insight Timer.jpg'
import uiMeditacionMindfulness from './assets/Screenshot_20191128-120937_Mindfulness.jpg'
import uiMeditacionSmilingMind from './assets/Screenshot_20191128-121025_Smiling Mind.jpg'

import uiAnimoSmilingMind from './assets/Screenshot_20191128-121019_Smiling Mind.jpg'
import uiAnimoCalm from './assets/Screenshot_20191128-120442_Calm.jpg'

const Otras = () => {
  return (
    <div id="otras">
      <div className="texto-otras">
        <p>Hola Álvaro y Constanza.</p>
        <p>Estos son ejemplos para que nos inspiremos.</p>
      </div>
      <div className="seccion-otras">
        <div className="otras-relleno">
          <h1>Interfaz de evaluación subjetiva del estado de ánimo</h1>
        </div>
        <div className="otras-captura">
          <p>Calm</p>
          <img src={uiAnimoCalm} />
        </div>
        <div className="otras-captura">
          <p>Smiling Mind</p>
          <img src={uiAnimoSmilingMind} />
        </div>
      </div>
      <div className="seccion-otras">
        <div className="otras-relleno">
          <h1>Interfaz de meditación</h1>
        </div>
        <div className="otras-captura">
          <p>Calm</p>
          <img src={uiMeditacionCalm} />
        </div>
        <div className="otras-captura">
          <p>Smiling Mind</p>
          <img src={uiMeditacionSmilingMind} />
        </div>
        <div className="otras-captura">
          <p>Daily Mindfulness</p>
          <img src={uiMeditacionDailyMindfulness} />
        </div>
        <div className="otras-captura">
          <p>Headspace</p>
          <img src={uiMeditacionHeadspace} />
        </div>
        <div className="otras-captura">
          <p>Buddhify</p>
          <img src={uiMeditacionBuddhify} />
        </div>
        <div className="otras-captura">
          <p>Insight Timer</p>
          <img src={uiMeditacionInsightTimer} />
        </div>
        <div className="otras-captura">
          <p>Mindfulness</p>
          <img src={uiMeditacionMindfulness} />
        </div>
      </div>
    </div>
  )
}

export default Otras
