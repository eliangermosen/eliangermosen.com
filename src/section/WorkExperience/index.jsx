import Timeline from "../../components/Timeline"
import dataWorkExperience from '../../services/data/WorkExperience.json'

export default function WorkExperience(){

    return(
        <section>
            <h2>Work Experience</h2>
            {dataWorkExperience.map((work, index) => (
                <Timeline 
                    key={index} name={work.title} enterprise={work.enterprise}
                    logo={work.image} startDate={`${work.date.start.month} ${work.date.start.year}`} endDate={`${work.date.end.month} ${work.date.end.year}`}
                    summary={work.summary}
                />
            ))}
        </section>
    )
}