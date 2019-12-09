import { faLaughBeam, faSmileBeam, faSmile, faMeh, faSadTear, faFrown, faAngry, faFlushed, faLaughSquint, faFrownOpen, faTired } from '@fortawesome/free-solid-svg-icons'

export const animos = [
   // I. Pleasant activation (energetic, excited)
  {
    nombre: 'Entusiasmado',
    icono: faLaughSquint
  },
  // II. Activated pleasure (enthusiastic, elated)
  {
    nombre: 'Emocionado',
    icono: faLaughBeam
  },
  // III. Pleasure (satisfied, pleased)
  {
    nombre: 'Contento',
    icono: faSmileBeam
  },
  // IV. Deactivated pleasure (serene, peaceful)
  {
    nombre: 'Relajado',
    icono: faSmile
  },
  // V. Pleasant deactivation (placid, tranquil)
  {
    nombre: 'Tranquilo',
    icono: faSmile
  },
  // VI. Deactivation (quiet, still)
  {
    nombre: 'Aburrido',
    icono: faMeh
  },
  // VII. Unpleasant deactivation (sluggish, tired)
  {
    nombre: 'Cansado',
    icono: faFrownOpen
  },
  // VIII. Deactivated displeasure (sad, gloomy)
  {
    nombre: 'Triste',
    icono: faSadTear
  },
  // IX. Displeasure (unhappy, dissatisfied)
  {
    nombre: 'Insatisfecho',
    icono: faFrown
  },
  // X. Activated displeasure (distressed, upset)
  {
    nombre: 'Enojado',
    icono: faAngry
  },
  // XI. Unpleasant activation (frenzied, jittery)
  {
    nombre: 'Nervioso',
    icono: faTired
  },
  {
    nombre: 'Activo',
    icono: faFlushed // XII. Activation (aroused, activated)
  }].reverse()