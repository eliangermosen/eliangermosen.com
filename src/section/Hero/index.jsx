import face from '../../assets/images/AboutMe/Profile.webp';
import SocialIcon from '../../components/SocialIcon';
import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonOutline from '../../components/ButtonOutline';
import './Hero.css'
import Typewriter from '../../components/Typewriter';
import arrowTo from '../../assets/icons/arrow-to.svg'
import download from '../../assets/icons/download.svg'
import downloadCV from '../../assets/Elian Germosen - Full Stack.pdf';

export default function Hero() {
    return(
        <section className="flex-init hero">
            <div className="box-1">
                <img src={face} alt="Elian Germosen face" className="face" />
            </div>
            <div className="box-2">
                <h1 className="m-0">Elian Germosen</h1>
                <Typewriter>Full-Stack Developer</Typewriter>
                <p>
                    Experienced Software Developer Engineer with 4+ years of experience specializing in building robust, scalable solutions for the judicial and government sectors. Expert in React and Angular for crafting intuitive frontends, and .NET Core with SQL Server for high-performance backend architectures. Committed to Clean Architecture and driving digital transformation.
                </p>
                <SocialIcon/>
                <div className="flex contain-btnhero">
                    <div className="btn-hero">
                        <ButtonPrimary icon={arrowTo} alter="arrow up icon" link="/about">About Me</ButtonPrimary>
                    </div>
                    <div className="btn-hero">
                        <ButtonOutline type="BtnIcon" icon={download} alter="download icon" 
                            link={downloadCV}>
                            Download <span translate="no">CV</span>
                        </ButtonOutline>
                    </div>
                </div>
            </div>
        </section>
    )
}