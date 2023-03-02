import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'
import '../styles/registerPage.css'

const RegisterPage = () => {

  const {register, handleSubmit, reset} = useForm()  
  const submit = data => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
    axios.post(url, data)
    .then(res=> console.log(res.data))
    .catch(err=> console.log(err))
    reset(defaultValues)
  }
  return (
    <div className='register__global-container'>
          <form className='register__form' onSubmit={handleSubmit(submit)} /*el submit es un evento exclusivo de los formularios */ > 
              <div className='register__container'>
                  <label className='register__label' htmlFor="firstName">First name</label>
                  <input {...register('firstName')} type="text" id='firstName' />
              </div>
              <div className='register__container'>
                  <label className='register__label' htmlFor="lastName">Last name</label>
                  <input {...register('lastName')} type="text" id='lastName' />
              </div>
              <div className='register__container'>
                  <label className='register__label' htmlFor="email" >email</label>
                  <input placeholder='example@gmail.com' {...register('email')} type="email" id='email' />
              </div>
              <div className='register__container'>
                  <label className='register__label' htmlFor="password">Password</label>
                  <input {...register('password')} type="password" id='password' />
              </div>
              <div className='register__container'>
                  <label className='register__label' htmlFor="phone">Phone</label>
                  <input {...register('phone')} type="number" id='phone' />
              </div>
              <button className='register__btn'>Register</button>
          </form>
    </div>

        

  
    

  )
}

export default RegisterPage