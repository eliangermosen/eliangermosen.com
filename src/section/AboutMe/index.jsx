import Blockquote from "../../components/Blockquote"

export default function AboutMe(){
    return(
        <section>
            <h2>About Me</h2>
            <Blockquote 
                paragraphs={
                    [
                        <>
                        I am a <strong>Software Development Engineer</strong> and <strong>Full-Stack Developer </strong>
                        based in the Dominican Republic with over <strong>4 years of experience</strong> building scalable digital solutions. 
                        I recently graduated as an <strong>Engineer</strong> from UNICARIBE with a strong GPA of 
                        <strong> 3.7 and special mention Magna Cum Laude</strong>, specializing in the analysis, design, and implementation of robust applications.
                        </>, 
                        <>
                        My technical foundation was built at the <strong>Instituto Tecnológico de las Américas (ITLA) </strong> 
                        where I earned my Software Developer technologist degree with an outstanding GPA of <strong>3.9 and a mention of excellence</strong>.
                        </>
                    ]
                }
            />
            <p className="my-1">
                Throughout my career, I have evolved from collaborating on B2B solutions to leading mission-critical systems for the Dominican 
                government and judicial sectors. My work includes leading the frontend development for national platforms like the National 
                Hearing Roster and architecting security systems for the Presidential Palace.
            </p>
            <p className="my-1">
                <strong>My Professional Focus:</strong>
            </p>
            <ul className="expertise-list">
                <li>
                    <strong>Full-Stack Expertise: </strong>
                    Advanced proficiency in React and Angular for frontends, and .NET Core, Web API, and SQL Server for robust backend architectures.
                </li>
                <li>
                    <strong>User-Centric Design: </strong>
                    Integrating UI/UX design principles (Figma) to ensure every interface is accessible and effective.
                </li>
                <li>
                    <strong>Engineering Excellence: </strong>
                    Committed to Onion Architecture, CI/CD pipelines, and Agile methodologies to deliver production-ready solutions from scratch.
                </li>
            </ul>
        </section>
    )
}