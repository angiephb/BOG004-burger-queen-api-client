import { useForm } from "react-hook-form";

const Formulario = () => {

    const { register, handleSubmit } = useForm();

    const submit = (data) => {
        console.log(data);

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