import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Header from "../header/header.js";
import { useNavigate } from "react-router-dom";

const Formulario = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [rol, setRol] = useState('');
  const [email, setEmail] = useState('');
  const [passwords, setPasswords] = useState('');

  const submit = (data) => {

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
        // console.log('ey', response.user.roles);
        if (response.user.roles.admin && rol === 'Administrador') {
          localStorage.setItem('rol', 'admin')
          navigate('/admin')
        }
        if (response.user.roles.mesero && rol === 'Mesero') {
          localStorage.setItem('rol', 'waiter')
          navigate('/waiter')
        }
        if (response.user.roles.cocina && rol ==='Cocina') {
          localStorage.setItem('rol', 'chef')
          navigate('/chef')
        }
      })
  }
  const errorMsj = {
    req: 'Este campo no puede estar vacio',
    mail: 'Introduce una dirección de correo válida',
    passwordNum: 'Debes ingresar solo numeros',
    passwordLength: 'La contraseña excede el numero de caracteres (6)'
  };
  const patterns = {
    mail: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    password: /[0-9]{1,6}/,
  };

  return (
    <div className='view-login'>
      <div>
        <Header />
      </div>
      <form onSubmit={handleSubmit(submit)} className='form'>

        <div className='row mb-5'>
          <label htmlFor='inputEmail3' className='col-sm-8 col-form-label'>Usuario</label>
          <div className='col-sm-8'>
            <input
              type='email'
              name='usuario'
              className='form-control'
              id='inputEmail3'
              // placeholder='usuario'
              value={email}
              data-testid='login-input-email'
              {...register('Usuario', { required: true, pattern: patterns.mail })}
              onChange={e => {setEmail(e.target.value)}}
            />
            {errors.Usuario?.type === 'required' && <p className='fail' data-testid='login-errormsj'>{errorMsj.req}</p>}
            {errors.Usuario?.type === 'pattern' && <p className='fail'>{errorMsj.mail}</p>}
          </div>
        </div>
        <div className='row mb-5'>
          <label className='col-sm-8 col-form-label'>Contraseña</label>
          <div className='col-sm-8'>
            <input
              type='password'
              className='form-control'
              id='inputPassword3'
              // placeholder='contraseña'
              value={passwords}
              data-testid='login-input-pass'
              {...register('Contraseña', { required: true, maxLength: 6, pattern: patterns.password })}
              onChange={e => {setPasswords(e.target.value)}}
            />
            {errors.Contraseña?.type === 'required' && <p className='fail'>{errorMsj.req}</p>}
            {errors.Contraseña?.type === 'maxLength' && <p className='fail'>{errorMsj.passwordLength}</p>}
            {errors.Contraseña?.type === 'pattern' && <p className='fail'>{errorMsj.passwordNum}</p>}
          </div>
        </div>

        <div className='row mb-5'>
          <label className='col-sm-8 col-form-label'>Quién eres?</label>
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