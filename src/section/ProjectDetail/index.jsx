import arrowBack from '../../assets/icons/arrow-back.svg'
import project1 from '../../assets/images/Projects/TvShow/Home.webp'
import project2 from '../../assets/images/Projects/TvShow/Detail.webp'
import github from '../../assets/icons/github.svg'
import arrowTo from '../../assets/icons/arrow-tow.svg'
import Chip from '../../components/Chip'
import Linq from '../../components/Link'
import './ProjectDetail.css'
import { Link, useNavigate } from 'react-router-dom'
import dataProject from '../../services/data/Projects.json'
import Paginator from '../../components/Paginator'

export default function Project({project}){

    const projectDetail = dataProject.find(projectDetail => projectDetail.name === project);
    console.log(projectDetail);

    const navigate = useNavigate();

    return(
        <section>

            <div className="flex back-project">
                <div className="flex div-icon">
                    {/* <Link to="/portfolio" className="flex back-icon">
                        <img src={arrowBack} alt="Arrow Back icon" />
                    </Link> */}
                    <button onClick={() => navigate(-1)} className="flex back-icon">
                        <img src={arrowBack} alt="Arrow Back icon" />
                    </button>
                </div>
                <div>
                    <Link to="/" className="underline">
                        HOME
                    </Link>
                    <span> / </span>
                    <Link to="/portfolio" className="underline">
                        PORTFOLIO
                    </Link>
                </div>
            </div>

            <article>

                <figure className="container-figure">
                    <img src={projectDetail.images[0]} alt={`View of ${projectDetail.name} project`} className="fig-img"/>
                    <figcaption className="fig-cap">View of {projectDetail.name} project</figcaption>
                </figure>

                <h1 translate="no">{projectDetail.name}</h1>
                
                <div className="container-chips">
                    {projectDetail.technologies.map((tech, index) => (
                            <Chip key={index}>{tech}</Chip>
                    ))}
                    {/* <Chip>HTML + CSS</Chip>
                    <Chip>JavaScript</Chip> */}
                </div>

                <p className="summary-space">{projectDetail.summary}</p>
                
                <figure className="container-figure">
                    <img src={projectDetail.images[1]} alt={`View of ${projectDetail.name} project`} className="fig-img"/>
                    <figcaption className="fig-cap">View of {projectDetail.name} project</figcaption>
                </figure>

                <p>{projectDetail.summary}</p>
                
                <h2>Links:</h2>
                
                <div className="divlink">
                    <Linq icon={github} link={projectDetail.url.repository} alter={'GitLab icon'}>GitHub</Linq>
                    { 
                        projectDetail.url.deployed 
                        ? <Linq icon={arrowTo} link={projectDetail.url.deployed} alter={'Arrow To icon'}>Demo</Linq> 
                        : null
                    }
                    {/* <Linq icon={arrowTo} link={projectDetail.url.deployed} alter={'Arrow To icon'}>Demo</Linq> */}
                </div>

            </article>
            
            <Paginator previous={projectDetail.previous} next={projectDetail.next}/>

        </section>
    )
}