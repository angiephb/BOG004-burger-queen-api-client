import logo from '../assets/image/logo.png'

const HeaderView = () => {
    return (
        <main>
            <header className='headerview'>
                <img src={logo} className='logoview' alt='logo' />
                <i className='fa-solid fa-right-from-bracket fa-3x'></i>
            </header>
            <hr></hr>
        </main>
    )
}
export default HeaderView;