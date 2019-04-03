import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Container, Content, Form } from 'native-base'
import { Row, Grid } from 'react-native-easy-grid'
import { connect } from 'react-redux'

import LogoFadeIn from '../componentes/LogoFadeIn'
import IngresarTelefono from '../componentes/IngresarTelefono'
import ConfirmarTelefono from '../componentes/ConfirmarTelefono'

class EscenaIngreso extends Component {
  navegarSiHayTelefono() {
    const { telefono, cambiarTiempoTranscurrido, navigation } = this.props

    if (telefono) {
      navigation.navigate('Requisitos')
    } else {
      cambiarTiempoTranscurrido(true)
    }
  }

  mostrarTelefono() {
    const {
      telefono, guardarTelefono, tiempoTranscurrido, navigation
    } = this.props

    if (tiempoTranscurrido) {
      return (
        <>
          <IngresarTelefono guardarTelefono={ guardarTelefono } />
          <ConfirmarTelefono telefono={ telefono } confirmar={ () => navigation.navigate('Requisitos') } />
        </>
      )
    }

    return null
  }

  render() {
    return (
      <Container>
        <Grid>
          <KeyboardAvoidingView behavior="padding" flex={ 1 }>
            <Row style={ estilos.centrado }>
              <Content>
                <Form style={ estilos.centrado }>
                  <LogoFadeIn
                    duracion={ 3500 }
                    callback={ () => { this.navegarSiHayTelefono() } }
                  />

                  { this.mostrarTelefono() }
                </Form>
              </Content>
            </Row>
          </KeyboardAvoidingView>
        </Grid>
      </Container>
    )
  }
}

EscenaIngreso.propTypes = {
  telefono: PropTypes.string.isRequired,
  tiempoTranscurrido: PropTypes.bool.isRequired,
  guardarTelefono: PropTypes.func.isRequired,
  cambiarTiempoTranscurrido: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

const estilos = StyleSheet.create({
  centrado: {
    alignItems: 'center',
    backgroundColor: '#00CE9F',
    justifyContent: 'center'
  }
})

const mapStateToProps = ({ telefono, tiempoTranscurrido }) => ({
  telefono,
  tiempoTranscurrido
})

const mapDispatchToProps = dispatch => ({
  guardarTelefono: (telefono) => {
    dispatch({ type: 'GUARDAR_TELEFONO', telefono })
  },
  cambiarTiempoTranscurrido: (tiempoTranscurrido) => {
    dispatch({ type: 'TIEMPO_TRANSCURRIDO', tiempoTranscurrido })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EscenaIngreso)
