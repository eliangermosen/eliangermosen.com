import './Skills.css'
import Skill from '../../components/Skill'
import jsimg from '../../assets/images/Skills/Javascript.svg'
import dataSkill from '../../services/data/Skills.json'

export default function Skills(){

    console.log(dataSkill);

    return(
        <section>
            <h2>Skills</h2>
            <article className="content-skills">
                {dataSkill.map((skill, index) => (
                    <Skill key={index} name={skill.name} time={skill.experience} logo={skill.image}/>
                ))}
                {/* <Skill name="JavaScript" time="1" logo={jsimg}/> */}
            </article>
        </section>
    )
}