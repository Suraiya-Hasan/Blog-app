import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h1 className='header'>Register</h1>
      <form className='form'>
        <label htmlFor="username">Username</label>
        <input required type="text" placeholder='username' />
        <label htmlFor="email">Email</label>
        <input required type="email" name="" id="" placeholder='email'/>
        <label htmlFor="password">Password</label>
        <input required type="password" name="" id="" placeholder='password' />
        <button>Register</button>
        <p>This is an error!</p>
        <span>Already have an account?<Link to="/login">Login</Link></span>
      </form>
      </div>
  )
}

export default Register
