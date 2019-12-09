import React from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BotonVolver = () => {

  const history = useHistory()

  return (
    <button className="boton-volver" onClick={() => history.goBack()}>
      <FontAwesomeIcon icon={faTimes} />
    </button>
  )
}

export default BotonVolver
