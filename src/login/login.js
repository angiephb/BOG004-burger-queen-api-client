import { useForm } from "react-hook-form";
import ProtectedRoute from "../componentes/ProtectedRoute.js";
import Header from "../header/header.js";
import { useNavigate } from "react-router-dom";

const Formulario = () => {
  const Navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    //console.log(data);
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
        if (response.user.roles.admin) {
          localStorage.setItem('Rol', 'admin')
        }
        console.log(response.user.roles.admin)
      });

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
            <input type='email' className='form-control' id='inputEmail3' {...register('Usuario')} />
          </div>
        </div>

        <div className='row mb-5'>
          <label className='col-sm-8 col-form-label'>Contraseña</label>
          <div className='col-sm-8'>
            <input type='password' className='form-control' id='inputPassword3' {...register('Contraseña')} />
          </div>
        </div>

        <div className='row mb-5'>
          <label className='col-sm-8 col-form-label'>Quien eres?</label>
          <div className='col-sm-8'>
            <select className='form-select' {...register('Rol')} aria-label='Default select example'>
              <option value='Mesero'>Mesero</option>
              <option value='Cocina'>Cocina</option>
              <option value='Administrador'>Administrador</option>
            </select>
          </div>
        </div>
        <div className="btnL">
          <button className="btn-login" onClick={() => Navigate(ProtectedRoute('Rol'))}>
            Ingresar
          </button>
        </div>
      </form>
    </div>
  )

}


export default Formulario;