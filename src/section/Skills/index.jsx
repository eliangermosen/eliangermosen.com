import './Skills.css'
import Skill from '../../components/Skill'
import HTML from '../../assets/images/Skills/HTML.svg'
import CSS from '../../assets/images/Skills/CSS.svg'
import JavaScript from '../../assets/images/Skills/Javascript.svg'
import TypeScript from '../../assets/images/Skills/TypeScript.svg'
import React from '../../assets/images/Skills/React.svg'
import Angular from '../../assets/images/Skills/Angular.svg'
import Csharp from '../../assets/images/Skills/Csharp.svg'
import NetCore from '../../assets/images/Skills/NetCore.svg'
import SQLServer from '../../assets/images/Skills/SqlServer.svg'
import Git from '../../assets/images/Skills/Git.svg'
import GitHub from '../../assets/images/Skills/GitHub.svg'
import Figma from '../../assets/images/Skills/Figma.svg'

export default function Skills(){

    return(
        <section>
            <h2>Skills</h2>
            <article className="content-skills">
                <Skill name="HTML" time="" logo={HTML}/>
                <Skill name="CSS" time="" logo={CSS}/>
                <Skill name="JavaScript" time="2" logo={JavaScript}/>
                <Skill name="TypeScript" time="2" logo={TypeScript}/>
                <Skill name="React" time="2" logo={React}/>
                <Skill name="Angular" time="2" logo={Angular}/>
                <Skill name="C#" time="2" logo={Csharp}/>
                <Skill name=".Net Core" time="2" logo={NetCore}/>
                <Skill name="SQL Server" time="2" logo={SQLServer}/>
                <Skill name="Git" time="2" logo={Git}/>
                <Skill name="GitHub" time="2" logo={GitHub}/>
                <Skill name="Figma" time="1" logo={Figma}/>
            </article>
        </section>
    )
}