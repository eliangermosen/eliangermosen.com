import Timeline from "../../components/Timeline"
import itla from '../../assets/images/Enterprises/Itla.webp'

export default function Education(){
    return(
        <section>
            <h2>Education</h2>
            <Timeline 
                name="Software Developer" enterprise="Instituto Tecnológico de las Américas (ITLA)" logo={itla} 
                startDate="January 2020" endDate="April 2022" 
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
        </section>
    )
}