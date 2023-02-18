import Timeline from "../../components/Timeline"
import itla from '../../assets/images/Enterprises/Itla.webp'

export default function Education(){
    return(
        <section>
            <h2>Education</h2>
            <Timeline 
                name="Software Developer" enterprise="Instituto Tecnológico de las Américas (ITLA)" logo={itla} 
                startDate="January 2020" endDate="April 2022" 
                summary="During my proccess of education in this institute I worked with a team of developers where collaboratively
                we created projects from scratch to production wich I could improve my habilities of comunication, leadership and teamwork.
                Besides for my continous learning I've taken courses and done projects alone, for the same way take my knowledge to the 
                highest level and could have the hability to solve problems."
            />
        </section>
    )
}