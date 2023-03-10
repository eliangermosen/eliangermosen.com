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
                </Link>
            </div>
            <nav className="flex nav">
                <Link to="/" className="underline">Home</Link>
                <Link to="/about" className="underline">About Me</Link>
                <Link to="/portfolio" className="underline">Portfolio</Link>
                <ButtonOutline type="Btn" link="mailto:elianmtoribio@gmail.com">Contact me</ButtonOutline>
            </nav>
        </header>
    )
}