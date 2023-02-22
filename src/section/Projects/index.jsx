import CardProject from '../../components/CardProject'
import PokedexCover from '../../assets/images/Projects/Pokedex/Result.webp'
import GiffyCover from '../../assets/images/Projects/Giffy/Home.webp'
import MusicCover from '../../assets/images/Projects/MusicArt/Home.webp'
import ShowCover from '../../assets/images/Projects/TvShow/Home.webp'
import StudentCover from '../../assets/images/Projects/StudentControl/Home.webp'
import TrailerCover from '../../assets/images/Projects/Trailers/Home.webp'

export default function Projects(){

    return(
        <section className="">
            <h1>Projects</h1>
            <article className="project-home">
                <CardProject
                            name="Pokedex"
                            stack={["React"]} cover={[PokedexCover]}
                />
                <CardProject
                            name="Giffy"
                            stack={["React"]} cover={[GiffyCover]}
                />
                <CardProject
                            name="MusicArt"
                            stack={["HTML + CSS", "JavaScript"]} cover={[MusicCover]}
                />
                <CardProject
                            name="TvShow"
                            stack={["HTML + CSS", "JavaScript"]} cover={[ShowCover]}
                />
                <CardProject
                            name="Student Control"
                            stack={["Angular", ".Net Core"]} cover={[StudentCover]}
                />
                <CardProject
                            name="Web Trailers"
                            stack={["Angular", ".Net Core"]} cover={[TrailerCover]}
                />
            </article>
        </section>
    )
}