import SocialIcon from '../SocialIcon'
import ButtonPrimary from '../ButtonPrimary'
import ButtonOutline from '../ButtonOutline'
import './Footer.css'
import { Link } from 'react-router-dom'
import send from '../../assets/icons/send.svg'

export default function Footer() {
    return(
        <>
            <hr />
            <footer className="footer">
                
                <div>
                    {/* CONVERTIR A DINAMICO */}
                    <p className="m-0 p-footer">2023 | Elian Germosen</p>
                    <SocialIcon></SocialIcon>
                </div>

                <div>
                    <h3 className="m-0 p-footer">Sections</h3>
                    <ul>
                        <li>
                            <Link to="/" className="underline">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="underline">About me</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" className="underline">Projects</Link>
                        </li>
                    </ul>
                </div>

                <div className="contact">
                    <h3 className="m-0 p-footer">Contact</h3>
                    <p>Let's come true your idea. Making it grow together, step by step.</p>
                    <ButtonPrimary icon={send} alter="send icon" link="mailto:elianmtoribio@gmail.com">elianmtoribio@gmail.com</ButtonPrimary>
                </div>
                
            </footer>
        </>
    )
}