
import React from 'react'
import './index.css'
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { setAllUser } from '../../../store/slices/form/formSlice'
import swal from "sweetalert";
import { useHistory } from 'react-router-dom'
export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const history = useHistory()
  const dispatch = useDispatch()
  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        dispatch(setAllUser(data.user))
        history.push('/reservations')
      }).catch(error => swal("Por favor registrate"))

  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <div className="wrapper">
      <div className="formContent">
        <div className='title-login'>
          Login
        </div>
        <form onSubmit={e => handleSubmit(e)}>
          <input type='text' className="input-test" placeholder='Email' value={formData.email} name='email' onChange={e => handleChange(e)} ></input>
          <input type='text' className="input-test" placeholder='Password' value={formData.password} name='password' onChange={e => handleChange(e)} ></input>
          <button className="button" type='submit'>Login</button>
        </form>
        <div className="formFooter">
          <a className="underlineHover" href="#">Welcome</a>
        </div>
      </div>
    </div>
  )
}

