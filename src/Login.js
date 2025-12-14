import React, { useState } from 'react'
import './Login.css'
import loginLogo from './img/loginLogo.png';
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail]  = useState('');
  const [password, setPassword]  = useState('');

  const signIn = e => {
    preventDefault();

  } 

  const register = e => {
    e.preventDefault();

    
  }
  return (
    
    <div className='login'>
        <Link to='/'>
        <img className='login__logo' src={loginLogo} />
        </Link>

        <div className='login__container'>

            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>

            </form>

            <p>
                By signing-in you agree to the AMAZON FAKE
                CLONE Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice 
                and our Interest-Based Ads Notice.
            </p>

            <button onClick={register} className='login__registerButton'>Create your amazon account</button>
        </div>
    </div>
  )
}

export default Login