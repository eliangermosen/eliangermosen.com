import Timeline from '../../components/Timeline'
import Cerobucks from '../../assets/images/Enterprises/Cerobucks.webp'

export default function WorkExperience(){

    return(
        <section>
            <h2>Work Experience</h2>
            <Timeline 
                name="Front-End Developer" enterprise="Cerobucks, S.R.L" logo={Cerobucks} 
                startDate="January 2022" endDate="April 2022" 
                summary="Modernize the company website. Improve the user experience. The Stack used in this experience was React, agile SCRUM methodologies adapted to completely remote work."
            />
        </section>
    )
}