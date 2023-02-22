import './Skills.css'
import Skill from '../../components/Skill'
import dataSkill from '../../services/data/Skills.json'

export default function Skills(){

    return(
        <section>
            <h2>Skills</h2>
            <article className="content-skills">
                {dataSkill.map((skill, index) => (
                    <Skill key={index} name={skill.name} time={skill.experience} logo={skill.image}/>
                ))}
            </article>
        </section>
    )
}