import logo from '../assets/image/logo.png'
import { useNavigate } from "react-router-dom";


const LogOut = (() => {
    localStorage.clear()
    const Navigate = useNavigate();
     Navigate('/') 

})

const HeaderView = () => {
    return (
        <main>
            <header className='headerview'>
                <img src={logo} className='logoview' alt='logo' />
                <button type='submit' onClick={() => LogOut()}><i className='fa-solid fa-right-from-bracket fa-3x'></i></button>
            </header>
            <hr></hr>
        </main>
    )
}
export default HeaderView;