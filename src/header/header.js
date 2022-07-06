import logo from '../assets/image/logo.png'
import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.headerlogo}>
            <header>
                <img src={logo} className={styles.Applogo} alt='logo' />
            </header>
        </div>
    );
}

export default Header;