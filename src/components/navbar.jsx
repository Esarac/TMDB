import React, { useEffect, useState } from 'react'
import { Navbar as RNavbar, Container, Button, Nav } from 'react-bootstrap'
import { CreateRequestToken, CreateSession } from '../services/authentication'
import Logo from '../assets/long-logo.svg'

function Navbar() {
  const [session, setSession] = useState();

  function logIn() {
    CreateRequestToken()
    .then((res)=>{
      const token = res.request_token;
      console.log(token)
      window.sessionStorage.setItem('request_token', token)
      window.open('https://www.themoviedb.org/authenticate/'+token+'?redirect_to='+window.location.href, '_self');
    })
  }

  useEffect(()=>{
    const sessionId = window.sessionStorage.getItem('session_id')

    if(sessionId)
      return setSession(sessionId)
    
    const token = window.sessionStorage.getItem('request_token')
    
    CreateSession(token)
    .then((res)=>{
      window.sessionStorage.setItem('session_id', res.session_id)
      setSession(res.session_id);
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  const ActualSession = () => {
    if(session)
      return (<div className='text-white'>{session}</div>)
    return(<Button variant="outline-primary" onClick={(e)=>{logIn()}}>Log in</Button>)
  }

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
        <RNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {ActualSession()}
          </Nav>
        </RNavbar.Collapse>
      </Container>
    </RNavbar>
  )
}

export default Navbar