import arrowBack from '../../assets/icons/arrow-back.svg'
import project1 from '../../assets/images/Projects/TvShow/Home.webp'
import project2 from '../../assets/images/Projects/TvShow/Detail.webp'
import github from '../../assets/icons/github.svg'
import arrowTo from '../../assets/icons/arrow-tow.svg'
import Chip from '../../components/Chip'
import Linq from '../../components/Link'
import './ProjectDetail.css'
import { Link } from 'react-router-dom'

export default function Project(){
    return(
        <section>

            <div className="flex back-project">
                <div className="flex div-icon">
                    <Link to="/portolio/back">
                        <img src={arrowBack} alt="Arrow Back icon" />
                    </Link>
                </div>
                <div>
                    <h4>HOME / PORTFOLIO</h4>
                </div>
            </div>

            <article>

                <figure className="container-figure">
                    <img src={project1} alt="Home view of TvShow project" className="fig-img"/>
                    <figcaption className="fig-cap">Home view of TvShow project</figcaption>
                </figure>

                <h1>TvShow</h1>
                
                <div className="container-chips">    
                    <Chip>HTML + CSS</Chip>
                    <Chip>JavaScript</Chip>
                </div>

                <p>Web Page where you can search all your favorite Shows.</p>
                
                <figure className="container-figure">
                    <img src={project2} alt="Detail view of TvShow project" className="fig-img"/>
                    <figcaption className="fig-cap">Detail view of TvShow project</figcaption>
                </figure>

                <p>Web Page where you can search all your favorite Shows.</p>
                
                <h2>Links:</h2>
                
                <div className="divlink">
                    <Linq icon={github} link={'https://github.com/Elianmtg/tvshow'} alter={'GitLab icon'}>GitHub</Linq>
                    <Linq icon={arrowTo} link={'https://elianmtg.github.io/tvshow/'} alter={'Arrow To icon'}>Demo</Linq>
                </div>

            </article>

        </section>
    )
}