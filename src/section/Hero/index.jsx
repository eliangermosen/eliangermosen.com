import face from '../../assets/images/AboutMe/Profile.webp';
import SocialIcon from '../../components/SocialIcon';
import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonOutline from '../../components/ButtonOutline';
import './Hero.css'
import Typewriter from '../../components/Typewriter';
import arrowTo from '../../assets/icons/arrow-to.svg'
import download from '../../assets/icons/download.svg'

export default function Hero() {
    return(
        <section className="flex-init hero">
            <div className="box-1">
                <img src={face} alt="Elian Germosen face" className="face" />
            </div>
            <div className="box-2">
                <h1 className="m-0">Elian Germosen</h1>
                <Typewriter>Web Developer</Typewriter>
                <p>
                    Software Developer with +2 year of experience in Web Development with the stack of technologies such as React and Angular for Frontend and C# .Net Core for Backend.
                </p>
                <SocialIcon/>
                <div className="flex contain-btnhero">
                    <div className="btn-hero">
                        <ButtonPrimary icon={arrowTo} alter="arrow up icon" link="/about">About Me</ButtonPrimary>
                    </div>
                    <div className="btn-hero">
                        <ButtonOutline type="BtnIcon" icon={download} alter="download icon" link={face}>Download <span translate="no">CV</span></ButtonOutline>
                    </div>
                </div>
            </div>
        </section>
    )
}