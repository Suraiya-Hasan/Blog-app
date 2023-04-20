import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1 className='header'>Login</h1>
      <form className='form'>
        <label htmlFor="username">Username</label>
        <input required type="text" placeholder='username' />
        <label htmlFor="password">Password</label>
        <input required type="password" name="" id="" placeholder='password' />
        <button>Login</button>
        <p>This is an error!</p>
        <span>Don't have an account?<Link to="/register">Register</Link></span>
      </form>
      </div>
  )
}

export default Login
