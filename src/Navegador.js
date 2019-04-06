// Navegación principal, definición de escenas y rutas.
import { createStackNavigator, createAppContainer } from 'react-navigation'

import EscenaIngreso from './escenas/EscenaIngreso'
import EscenaRequisitos from './escenas/EscenaRequisitos'
import EscenaContraindicaciones from './escenas/EscenaContraindicaciones'
import EscenaContacto from './escenas/EscenaContacto'
import EscenaIndicaciones from './escenas/EscenaIndicaciones'

const Navegador = createStackNavigator({
  Ingreso: { screen: EscenaIngreso },
  Requisitos: { screen: EscenaRequisitos },
  Contraindicaciones: { screen: EscenaContraindicaciones },
  Contacto: { screen: EscenaContacto },
  Indicaciones: { screen: EscenaIndicaciones }
}, {
  initialRouteName: 'Ingreso',
  defaultNavigationOptions: {
    header: null
  }
})

export default createAppContainer(Navegador)