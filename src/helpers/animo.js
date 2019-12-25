// http://www.scielo.edu.uy/scielo.php?script=sci_arttext&pid=S1688-42212012000200005

export const animos = [
   // I. Pleasant activation (energetic, excited)
  {
    nombre: 'Eufórico',
    icono: 'partying-face',
    activacion: 2,
    placer: 1
  },
  // II. Activated pleasure (enthusiastic, elated)
  {
    nombre: 'Entusiasmado',
    icono: 'grinning-face',
    activacion: 1,
    placer: 2
  },
  // III. Pleasure (satisfied, pleased)
  {
    nombre: 'Feliz',
    icono: 'smiling-face-with-smiling-eyes',
    activacion: 0,
    placer: 3
  },
  // IV. Deactivated pleasure (serene, peaceful)
  {
    nombre: 'Relajado',
    icono: 'relieved-face',
    activacion: -1,
    placer: 2
  },
  // V. Pleasant deactivation (placid, tranquil)
  {
    nombre: 'Tranquilo',
    icono: 'slightly-smiling-face',
    activacion: -2,
    placer: 1
  },
  // VI. Deactivation (quiet, still)
  {
    nombre: 'Ocioso',
    icono: 'neutral-face',
    activacion: -3,
    placer: 0
  },
  // VII. Unpleasant deactivation (sluggish, tired)
  {
    nombre: 'Cansado',
    icono: 'weary-face',
    activacion: -2,
    placer: -1
  },
  // VIII. Deactivated displeasure (sad, gloomy)
  {
    nombre: 'Desganado',
    icono: 'confused-face',
    activacion: -1,
    placer: -2
  },
  // IX. Displeasure (unhappy, dissatisfied)
  {
    nombre: 'Triste',
    icono: 'crying-face',
    activacion: 0,
    placer: -3
  },
  // X. Activated displeasure (distressed, upset)
  {
    nombre: 'Irritado',
    icono: 'angry-face',
    activacion: 1,
    placer: -2
  },
  // XI. Unpleasant activation (frenzied, jittery)
  {
    nombre: 'Nervioso',
    icono: 'confounded-face',
    activacion: 2,
    placer: -1
  },
  // XII. Activation (aroused, activated)
  {
    nombre: 'Alerta',
    icono: 'grimacing-face',
    activacion: 3,
    placer: 0
  }].reverse()