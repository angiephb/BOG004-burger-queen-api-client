import logo from '../assets/image/logo.png'
import styles from './header.module.css'

const Header = () => {
    return (
        <div className='header-logo'>
            <header>
                <img src={logo} className={styles.App-logo} alt='logo' />
            </header>
        </div>
    );
}

export default Header;