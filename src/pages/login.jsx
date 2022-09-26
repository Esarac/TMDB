import React from 'react';
import { CreateGuessSession } from '../services/authentication';

function Login() {
  return (
    <div>
      login
      <button onClick={CreateGuessSession()}>Click me</button>
    </div>
  )
}

export default Login