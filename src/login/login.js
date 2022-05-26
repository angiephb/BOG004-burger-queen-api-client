import { useForm } from "react-hook-form";
// import { ErrorMessage } from "@hookform/error-message";
import React, { useState } from "react";
import Header from "../header/header.js";
import { useNavigate } from "react-router-dom";

const Formulario = () => {
  const Navigate = useNavigate();
  const { register, handleSubmit, /* errors  */ } = useForm();
  const [rol, setRol] = useState('');

  const submit = (data) => {
    console.log('aquiesta', rol);
    const user = {
      email: data.Usuario,
      password: data.Contraseña
    }
    const url = 'http://localhost:8080';

    fetch(url + '/login', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(user), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        localStorage.setItem('Token:', response.accessToken)
        console.log('holie', response.user.roles)
        if (response.user.roles.admin) {
          localStorage.getItem('Token:')
          Navigate('/admin')
        }
        else if (response.user.roles.mesero) {
          localStorage.getItem('Token:')
          Navigate('/waiter')
        }
        else {
          localStorage.getItem('Token:')
          Navigate('/chef')
        }
        console.log(response.user, 'esta es la info')
      })
  }

  return (
    <div className='view-login'>
      <div>
        <Header />
      </div>
      <form onSubmit={handleSubmit(submit)} className='form'>

        <div className='row mb-5'>
          <label className='col-sm-8 col-form-label'>Usuario</label>
          <div className='col-sm-8'>
            <input
              type='email'
              name='usuario'
              className='form-control'
              id='inputEmail3'
              {...register('Usuario', {
                required: true,
                message: "Please enter your name"
              })} />
            {/* <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => <p>{message}</p>}
            /> */}
          </div>
        </div>

        <div className='row mb-5'>
          <label className='col-sm-8 col-form-label'>Contraseña</label>
          <div className='col-sm-8'>
            <input type='password' className='form-control' id='inputPassword3' {...register('Contraseña', { required: true })} />
          </div>
        </div>

        <div className='row mb-5'>
          <label className='col-sm-8 col-form-label'>Quien eres?</label>
          <div className='col-sm-8'>
            <select className='form-select' name='Rol' value={rol} onChange={(e) => { setRol(e.target.value); }} >
              <option value='rol'> Escoge tu rol</option>
              <option value='Mesero'>Mesero</option>
              <option value='Cocina'>Cocina</option>
              <option value='Administrador'>Administrador</option>
            </select>
          </div>
        </div>
        <div className="btnL">
          <button className="btn-login" type='submit'> Ingresar </button>
        </div>
      </form>
    </div>
  )

}


export default Formulario;