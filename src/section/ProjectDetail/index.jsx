import arrowBack from '../../assets/icons/arrow-back.svg'
import project1 from '../../assets/images/Projects/TvShow/Home.webp'
import project2 from '../../assets/images/Projects/TvShow/Detail.webp'
import github from '../../assets/icons/github.svg'
import arrowTo from '../../assets/icons/arrow-tow.svg'
import Chip from '../../components/Chip'
import Link from '../../components/Link'
import './ProjectDetail.css'

export default function Project(){
    return(
        <section>

            <div className="back-project">
                <a href="/portolio/back">
                    <img src={arrowBack} alt="Arrow Back icon" />
                </a>
                <h4>HOME / PORTFOLIO</h4>
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
                    <Link icon={github} link={'/portolio/github'} alter={'GitLab icon'}>GitHub</Link>
                    <Link icon={arrowTo} link={'/portolio/demo'} alter={'Arrow To icon'}>Demo</Link>
                </div>

            </article>

        </section>
    )
}