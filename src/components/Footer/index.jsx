import SocialIcon from "./../SocialIcon"
import ButtonPrimary from "./../ButtonPrimary"
import './Footer.css'
import { Link } from "react-router-dom"

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
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About me</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Projects</Link>
                        </li>
                    </ul>
                </div>

                <div className="contact">
                    <h3 className="m-0 p-footer">Contact</h3>
                    <p>Let's come true your idea. Making it grow together, step by step.</p>
                    <ButtonPrimary>elianmtoribio@gmail.com</ButtonPrimary>
                </div>
                
            </footer>
        </>
    )
}