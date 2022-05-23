import { useForm } from "react-hook-form";

const Formulario = () => {

  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data);
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
      .then(response => localStorage.setItem('Token:', response.accessToken));

  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div className='row mb-3'>
          <label className='col-sm-2 col-form-label'>Usuario</label>
          <div className='col-sm-10'>
            <input type='email' className='form-control' id='inputEmail3' {...register('Usuario')} />
          </div>
        </div>
        <div className='row mb-3'>
          <label className='col-sm-2 col-form-label'>Contraseña</label>
          <div className='col-sm-10'>
            <input type='password' className='form-control' id='inputPassword3' {...register('Contraseña')} />
          </div>
        </div>
        <label className='col-sm-2 col-form-label'>Quien eres?</label>
        <select className='form-select'  {...register('Rol')} aria-label='Default select example'>
          <option value='Mesero'>Mesero</option>
          <option value='Cocina'>Cocina</option>
          <option value='Administrador'>Administrador</option>
        </select>
        <input type='submit' value='Ingresar' />
      </form>
    </div>
  )

}


export default Formulario;