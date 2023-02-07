import SocialIcon from "./../SocialIcon"
import ButtonPrimary from "./../ButtonPrimary"
import './Footer.css'

export default function Footer() {
    return(
        <>
            <hr />
            <footer>
                
                <div>
                    {/* CONVERTIR A DINAMICO */}
                    <p className="m-0 p-footer">2023 | Elian Germosen</p>
                    <SocialIcon></SocialIcon>
                </div>

                <div>
                    <h3 className="m-0 p-footer">Sections</h3>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About me</a>
                        </li>
                        <li>
                            <a href="/">Projects</a>
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