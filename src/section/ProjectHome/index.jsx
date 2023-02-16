import ButtonPrimary from '../../components/ButtonPrimary';
import CardProject from '../../components/CardProject';
import './ProjectHome.css';
import arrowTo from '../../assets/icons/arrow-to.svg'
import dataTopProjects from '../../services/data/Projects.json'

export default function ProjectHome() {

    console.log(dataTopProjects);

    const resultTopProjects = dataTopProjects.filter(top => top.favorite);

    return(
        <section className="project-home">
            <article className="card-text">
                <h2>Recent Projects</h2>
                <p>Here I show you my more recent projects. You can see and read the information about every one.</p>
            </article>
            {resultTopProjects.map((project, index) => (
                <CardProject 
                            key={index} name={project.name} 
                            stack={project.technologies} cover={project.images}
                />
            ))}
            {/* <CardProject></CardProject>
            <CardProject></CardProject>
            <CardProject></CardProject>
            <CardProject></CardProject> */}
            <article className="card-text">
                <p>If you wish to know more projects that I have done. Click the button.</p>
                <div className="btn-more-project">
                    <ButtonPrimary icon={arrowTo} alter="arrow up icon" link="/portfolio">More Projects</ButtonPrimary>
                </div>
            </article>
        </section>
    )
}