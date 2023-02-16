import CardProject from '../../components/CardProject'
import dataProjects from '../../services/data/Projects.json'

export default function Projects(){
    console.log(dataProjects);

    return(
        <section className="">
            <h1>Projects</h1>
            <article className="project-home">
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
            </article>
        </section>
    )
}