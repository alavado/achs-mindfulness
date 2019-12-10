import { faLaughBeam, faSmileBeam, faSmile, faMeh, faSadTear, faFrown, faAngry, faFlushed, faLaughSquint, faFrownOpen, faTired, faGrinWink } from '@fortawesome/free-solid-svg-icons'

export const animos = [
   // I. Pleasant activation (energetic, excited)
  {
    nombre: 'Eufórico',
    icono: faLaughSquint,
    activacion: 2,
    placer: 1
  },
  // II. Activated pleasure (enthusiastic, elated)
  {
    nombre: 'Entusiasmado',
    icono: faLaughBeam,
    activacion: 1,
    placer: 2
  },
  // III. Pleasure (satisfied, pleased)
  {
    nombre: 'Feliz',
    icono: faSmileBeam,
    activacion: 0,
    placer: 3
  },
  // IV. Deactivated pleasure (serene, peaceful)
  {
    nombre: 'Relajado',
    icono: faGrinWink,
    activacion: -1,
    placer: 2
  },
  // V. Pleasant deactivation (placid, tranquil)
  {
    nombre: 'Tranquilo',
    icono: faSmile,
    activacion: -2,
    placer: 1
  },
  // VI. Deactivation (quiet, still)
  {
    nombre: 'Ocioso',
    icono: faMeh,
    activacion: -3,
    placer: 0
  },
  // VII. Unpleasant deactivation (sluggish, tired)
  {
    nombre: 'Cansado',
    icono: faFrownOpen,
    activacion: -2,
    placer: -1
  },
  // VIII. Deactivated displeasure (sad, gloomy)
  {
    nombre: 'Desganado',
    icono: faFrown,
    activacion: -1,
    placer: -2
  },
  // IX. Displeasure (unhappy, dissatisfied)
  {
    nombre: 'Triste',
    icono: faSadTear,
    activacion: 0,
    placer: -3
  },
  // X. Activated displeasure (distressed, upset)
  {
    nombre: 'Irritado',
    icono: faAngry,
    activacion: 1,
    placer: -2
  },
  // XI. Unpleasant activation (frenzied, jittery)
  {
    nombre: 'Nervioso',
    icono: faTired,
    activacion: 2,
    placer: -1
  },
  // XII. Activation (aroused, activated)
  {
    nombre: 'Alerta',
    icono: faFlushed,
    activacion: 3,
    placer: 0
  }].reverse()