import Blockquote from "../../components/Blockquote"

export default function AboutMe(){
    return(
        <section>
            <h2>About Me</h2>
            <p>
                Hello! My name is Elian Germosen. I started to code from the 2020 in the institute and from that moment 
                I've never stopped this wonderful world.
            </p>
            <Blockquote>
                I'm a Web Developer based in the Dominican Republic. Graduated from Software Development career 
                of Instituto Tecnológico de las Américas (ITLA). I have been creating and developing projects on the web 
                from the scratch to pro for the last 2 years. Working with B2B companies from several countries and industries.
            </Blockquote>
            <p className="my-1">
                My focus is on creating attractive, accesibles and effective interfaces for users.
            </p>
            {/* <p>
                Personally I try to be active on my GitHub account developing new ideas and on My Twitter account sharing useful content.
            </p> */}
        </section>
    )
}