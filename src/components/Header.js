import '../styles/Header.scss';
import { FaMoon } from 'react-icons/fa'

const Header = ({ color, setColor }) => {

    return (
        <header className="main-header">
            <p>Where in the world?</p>
            <button onClick={() => setColor(!color)} className="main-header__btn"><FaMoon /> Dark Mode</button>
        </header>
    )
}

export default Header;