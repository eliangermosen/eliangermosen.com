import CardProject from '../../components/CardProject'
import dataProjects from '../../services/data/ProjectsDetails' 

export default function Projects(){

    return(
        <section className="">
            <h1>Projects</h1>
            <article className="project-home">
                {dataProjects.map((project) => (
                    <CardProject 
                                key={project.id} name={project.name} 
                                stack={project.technologies} cover={project.images}
                    />
                ))}
            </article>
        </section>
    )
}