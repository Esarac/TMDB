import React from 'react'
import routes from '../config/routes'
import Navbar from '../components/navbar'

function App() {
  return (
    <div>
      <Navbar/>
      {routes}
    </div>
  )
}

export default App