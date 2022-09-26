import React from 'react'
import { Navbar as RNavbar, Container } from 'react-bootstrap'
import Logo from '../assets/long-logo.svg'

function Navbar() {
  return (
    <RNavbar bg="dark" variant="dark" fixed="top">
      <Container>
        <RNavbar.Brand href="#">
          <img
            alt=""
            src={Logo}
            width="100"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        </RNavbar.Brand>
      </Container>
    </RNavbar>
  )
}

export default Navbar