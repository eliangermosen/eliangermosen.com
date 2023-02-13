import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/favicon.svg'
import ButtonOutline from '../ButtonOutline'

export default function Header() {
    return(
        <header className="flex header">
            <div className="logo">
                <Link to="/" className="flex">
                    <img src={logo} alt="Elian Germosen's logo" />
                    {/* Elian Germosen */}
                </Link>
            </div>
            <nav className="flex nav">
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <ButtonOutline type="Btn" link="mailto:elianmtoribio@gmail.com">Contact me</ButtonOutline>
            </nav>
            {/* <div>
                <ButtonOutline>Contact me</ButtonOutline>
            </div> */}
        </header>
    )
}