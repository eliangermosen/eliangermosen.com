import Timeline from '../../components/Timeline'
import dataEducation from '../../services/data/Education'

export default function Education(){
    return(
        <section>
            <h2>Education</h2>
            {
                dataEducation
                .sort((a, b) => b.order - a.order)
                .map((education) => (
                    <Timeline 
                        key={education.id} name={education.name} enterprise={education.enterprise} logo={education.logo} 
                        startDate={education.startDate} endDate={education.endDate} summary={education.summary}
                    />
                ))
            }
        </section>
    )
}