import React from 'react'
import './Otras.css'

import uiMeditacionBuddhify from './assets/Screenshot_20191128-120338_buddhify.jpg'
import uiMeditacionCalm from './assets/Screenshot_20191128-120416_Calm.jpg'
import uiMeditacionDailyMindfulness from './assets/Screenshot_20191128-120640_Daily Mindfulness.jpg'
import uiMeditacionHeadspace from './assets/Screenshot_20191128-120757_Headspace.jpg'
import uiMeditacionInsightTimer from './assets/Screenshot_20191128-120847_Insight Timer.jpg'
import uiMeditacionMindfulness from './assets/Screenshot_20191128-120937_Mindfulness.jpg'
import uiMeditacionSmilingMind from './assets/Screenshot_20191128-121025_Smiling Mind.jpg'

import uiSeleccionBuddhify from './assets/Screenshot_20191128-120331_buddhify.jpg'
import uiSeleccionCalm from './assets/Screenshot_20191128-120411_Calm.jpg'
import uiSeleccionDailyMindfulness from './assets/Screenshot_20191128-120630_Daily Mindfulness.jpg'
import uiSeleccionInsightTimer from './assets/Screenshot_20191128-120852_Insight Timer.jpg'
import uiSeleccionMindfulness from './assets/Screenshot_20191128-120926_Mindfulness.jpg'

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
          <img src={uiAnimoCalm} alt="" />
        </div>
        <div className="otras-captura">
          <p>Smiling Mind</p>
          <img src={uiAnimoSmilingMind} alt="" />
        </div>
      </div>
      <div className="seccion-otras">
        <div className="otras-relleno">
          <h1>Interfaz de selección de ejercicio</h1>
        </div>
        <div className="otras-captura">
          <p>Buddhify</p>
          <img src={uiSeleccionBuddhify} alt="" />
        </div>
        <div className="otras-captura">
          <p>Calm</p>
          <img src={uiSeleccionCalm} alt="" />
        </div>
        <div className="otras-captura">
          <p>Daily Mindfulness</p>
          <img src={uiSeleccionDailyMindfulness} alt="" />
        </div>
        <div className="otras-captura">
          <p>Insight Timer</p>
          <img src={uiSeleccionInsightTimer} alt="" />
        </div>
        <div className="otras-captura">
          <p>Mindfulness</p>
          <img src={uiSeleccionMindfulness} alt="" />
        </div>
      </div>
      <div className="seccion-otras">
        <div className="otras-relleno">
          <h1>Interfaz de ejercicio</h1>
        </div>
        <div className="otras-captura">
          <p>Calm</p>
          <img src={uiMeditacionCalm} alt="" />
        </div>
        <div className="otras-captura">
          <p>Smiling Mind</p>
          <img src={uiMeditacionSmilingMind} alt="" />
        </div>
        <div className="otras-captura">
          <p>Daily Mindfulness</p>
          <img src={uiMeditacionDailyMindfulness} alt="" />
        </div>
        <div className="otras-captura">
          <p>Headspace</p>
          <img src={uiMeditacionHeadspace} alt="" />
        </div>
        <div className="otras-captura">
          <p>Buddhify</p>
          <img src={uiMeditacionBuddhify} alt="" />
        </div>
        <div className="otras-captura">
          <p>Insight Timer</p>
          <img src={uiMeditacionInsightTimer} alt="" />
        </div>
        <div className="otras-captura">
          <p>Mindfulness</p>
          <img src={uiMeditacionMindfulness} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Otras
