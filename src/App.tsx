import React from 'react'
import {
  Container,
  Row,
  Col,
  Navbar
} from 'react-bootstrap'
import Home from './components/Home'
import { nxoColor } from './styles/nxo-styles'
import logo_landscape from './assets/logo-landscape.png'

const sideColumnStyle = {
  backgroundColor: '#000',
  color: nxoColor,
  width: '15%',
  minWidth: '288px'
}

const contentColumnStyle = {
  backgroundColor: '#292929',
  color: 'fff',
  width: '85%',
  minWidth: '1632px'
}

const containerStyle = {
  // height: '100%',
  // width: '100%'
}

const App = (): JSX.Element => {
  return (
    <Container style={containerStyle}>
      <Row style={{display: 'flex'}}>
        <Col style={sideColumnStyle}>
          <img src={logo_landscape} alt="logo" />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error quisquam sapiente, voluptate, laboriosam sit tenetur vitae non excepturi recusandae, dolore sint impedit velit accusantium iusto nisi deserunt aliquam atque perferendis!
        </Col>
        <Col style={contentColumnStyle}>
          {/* <Navbar expand="lg" variant="light" bg="light">

          </Navbar> */}
          <Home />
        </Col>
      </Row>
    </Container>
  )
}

export default App
