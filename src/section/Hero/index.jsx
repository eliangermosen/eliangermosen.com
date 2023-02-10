import face from '../../assets/images/AboutMe/Profile.webp';
import SocialIcon from '../../components/SocialIcon';
import ButtonPrimary from '../../components/ButtonPrimary';
import './Hero.css'
import Typewriter from '../../components/Typewriter';
import arrowTo from '../../assets/icons/arrow-to.svg'

export default function Hero() {
    return(
        <section className="flex-init hero">
            <div className="box-1">
                <img src={face} alt="Elian Germosen face" className="face" />
            </div>
            <div className="box-2">
                <h1>Elian Germosen</h1>
                {/* <h3 className="role">Web Developer</h3> */}
                <Typewriter>Web Developer</Typewriter>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <SocialIcon/>
                <div className="btn-hero">
                    <ButtonPrimary icon={arrowTo} alter="arrow up icon" link="/about">About Me</ButtonPrimary>
                </div>
            </div>
        </section>
    )
}