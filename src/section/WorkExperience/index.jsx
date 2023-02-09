import Timeline from "../../components/Timeline"
import cero from '../../assets/images/Enterprises/Cerobucks.webp'

export default function WorkExperience(){
    return(
        <section>
            <h2>Work Experience</h2>
            <Timeline 
                name="Front-End Developer" enterprise="Cerobucks, S.R.L" logo={cero} 
                startDate="January 2022" endDate="March 2022" 
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
        </section>
    )
}