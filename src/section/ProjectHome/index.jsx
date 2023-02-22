import ButtonPrimary from '../../components/ButtonPrimary';
import CardProject from '../../components/CardProject';
import './ProjectHome.css';
import arrowTo from '../../assets/icons/arrow-to.svg'
import PokedexCover from '../../assets/images/Projects/Pokedex/Result.webp'
import GiffyCover from '../../assets/images/Projects/Giffy/Home.webp'
import ShowCover from '../../assets/images/Projects/TvShow/Home.webp'
import StudentCover from '../../assets/images/Projects/StudentControl/Home.webp'

export default function ProjectHome() {

    return(
        <section className="project-home">
            <article className="card-text">
                <h2>Recent Projects</h2>
                <p>Here I show you my more recent projects. You can see and read the information about every one.</p>
            </article>
            <CardProject
                        name="Pokedex"
                        stack={["React"]} cover={[PokedexCover]}
            />
            <CardProject
                        name="Giffy"
                        stack={["React"]} cover={[GiffyCover]}
            />
            <CardProject
                        name="TvShow"
                        stack={["HTML + CSS", "JavaScript"]} cover={[ShowCover]}
            />
            <CardProject
                        name="Student Control"
                        stack={["Angular", ".Net Core"]} cover={[StudentCover]}
            />
            <article className="card-text">
                <p>If you wish to know more projects that I have done. Click the button.</p>
                <div className="btn-more-project">
                    <ButtonPrimary icon={arrowTo} alter="arrow up icon" link="/portfolio">More Projects</ButtonPrimary>
                </div>
            </article>
        </section>
    )
}