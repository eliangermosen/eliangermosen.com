import './Header.css'
import logo from '../../assets/images/favicon.svg'
import ButtonOutline from '../ButtonOutline'

export default function Header() {
    return(
        <header className="flex header">
            <div className="logo">
                <a href="/" className="flex">
                    <img src={logo} alt="Elian Germosen's logo" />
                    {/* Elian Germosen */}
                </a>
            </div>
            <nav className="flex nav">
                <a href="/">Home</a>
                <a href="/about">About Me</a>
                <a href="/portfolio">Portfolio</a>
                <ButtonOutline>Contact me</ButtonOutline>
            </nav>
            {/* <div>
                <ButtonOutline>Contact me</ButtonOutline>
            </div> */}
        </header>
    )
}