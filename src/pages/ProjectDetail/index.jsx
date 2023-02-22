import Project from "../../section/ProjectDetail"
import { useParams } from 'react-router-dom'
import useSEO from "../../hooks/useSEO";

export default function PorjectDetail(){

    let {project} = useParams();

    useSEO({title: `${project} Project`});

    return(
        <main className="content-page">
            <Project project={project}/>
        </main>
    )
}