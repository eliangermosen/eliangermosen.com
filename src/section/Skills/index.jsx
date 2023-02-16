import './Skills.css'
import Skill from '../../components/Skill'
import jsimg from '../../assets/images/Skills/Javascript.svg'
import dataSkill from '../../services/data/Skills.json'

export default function Skills(){

    console.log(dataSkill);
    console.log(dataSkill[0].image);

    return(
        <section>
            <h2>Skills</h2>
            <article className="content-skills">
                <Skill name="JavaScript" time="1" logo={jsimg}/>
                <Skill name="JavaScript" time="1" logo={jsimg}/>
                <Skill name="JavaScript" time="1" logo={jsimg}/>
                <Skill name="JavaScript" time="1" logo={jsimg}/>
                <Skill name="JavaScript" time="1" logo={jsimg}/>
                <Skill name="JavaScript" time="1" logo={jsimg}/>
                <Skill name="JavaScript" time="1" logo={jsimg}/>
                <Skill name="JavaScript" time="1" logo={jsimg}/>
                <Skill name="JavaScript" time="1" logo={jsimg}/>
                <Skill name="JavaScript" time="1" logo={jsimg}/>
                <Skill name="JavaScript" time="1" logo={jsimg}/>
                <Skill name="JavaScript" time="1" logo={jsimg}/>
            </article>
        </section>
    )
}