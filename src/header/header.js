import logo from '../assets/image/logo.png'

const Header = () => {
    return (
        <div className='header-logo'>
            <header>
                <img src={logo} className='App-logo' alt='logo' />
            </header>
        </div>
    );
}

export default Header;