import { BsFillHeartFill } from 'react-icons/bs';
import '../styles/Footer.scss'

const Footer = () => {
    return (
        <footer className="main-footer">
            <p>Coded with <span className="main-footer__heart"><BsFillHeartFill /></span> by Jumgal</p>
        </footer>
    )
}

export default Footer;