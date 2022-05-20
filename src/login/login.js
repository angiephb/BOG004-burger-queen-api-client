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
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label>Usuario</label>
                    <input type='text' {...register('Usuario')} />
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type='password' {...register('Contraseña')} />
                </div>
                <div>
                    <label>Quien eres?</label>
                    <select {...register('Rol')}>
                        <option value='Mesero'>Mesero</option>
                        <option value='Cocina'>Cocina</option>
                        <option value='Administrador'>Administrador</option>
                    </select>

                </div>
                <input type='submit' value='Ingresar'/>
            </form>

        </div>
    );

}


export default Formulario;