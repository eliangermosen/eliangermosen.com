import CardProject from '../../components/CardProject'
import dataProjects from '../../services/data/Projects.json'
import coveri from '../../assets/images/Projects/TvShow/Detail.webp'

export default function Projects(){
    console.log(dataProjects);

    return(
        <section className="">
            <h1>Projects</h1>
            <article className="project-home">
                {dataProjects.map((project, index) => (
                    <CardProject 
                                key={index} name={project.name} 
                                stack={project.technologies} cover={project.images}
                    />
                ))}
                {/* <CardProject
                            name="TvShow" 
                            stack="HTML + CSS" cover={coveri}
                /> */}
            </article>
        </section>
    )
}