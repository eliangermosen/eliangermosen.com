import './Skills.css'
import Skill from '../../components/Skill'
import jsimg from '../../assets/images/Skills/Javascript.svg'

export default function Skills(){
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