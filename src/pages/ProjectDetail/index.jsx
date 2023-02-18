import Project from "../../section/ProjectDetail"
import { useParams } from 'react-router-dom'

export default function PorjectDetail(){

    let {project} = useParams();

    return(
        <main className="content-page">
            <Project project={project}/>
        </main>
    )
}