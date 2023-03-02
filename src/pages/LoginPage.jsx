import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'
import '../styles/login.css'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const [token, setToken] = useState('')
  const { register, handleSubmit, reset } = useForm()

  const submit = data => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
    axios
      .post(url, data)
      .then((res) => {
        setToken(res.data.token)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('userId', res.data.user._id)
      })
      .catch((err) => {
        console.log(err)
        // Show error message to the user
      })
    reset(defaultValues)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    setToken('')
  }
  /*bastiantito@gmail.com */

  if (localStorage.getItem('token')) {
    return (
      
      <div className='logout__global-container' >
        <div className='logout__container'>
        <img className='logout__img' src="/images/bx-user-check.svg" alt="" />
        <h2>Registrado</h2>
        <button className='logout__btn' onClick={handleLogout}>Logout</button>
        </div>
      </div>
     
    )
  } else {
    return (
      <div className="login__global-container">
        <form className="login__form" onSubmit={handleSubmit(submit)}>
          <h2 className="login__title">Login</h2>
          <div>
            <div className="login__container">
              <label className="login__label title__1" htmlFor="email">
                email
              </label>
              <input            
                {...register('email')}
                type="email"
                id="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="login__container">
              <label className="login__label title__2" htmlFor="password">
                Password
              </label>
              <input {...register('password')} type="password" id="password" />
            </div>
            <button className="login__btn">Login</button>
          </div>
          <div className="sing__container">
            Don't have an account? <Link to="/user/register">Sign up</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginPage
