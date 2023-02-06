import ButtonPrimary from '../../components/ButtonPrimary';
import CardProject from '../../components/CardProject';
import './ProjectHome.css';

export default function ProjectHome() {
    return(
        <section className="project-home">
            <article className="card-text">
                <h2>Recent Projects</h2>
                <p>Here I show you my more recent projects. You can see and read the information about every one.</p>
            </article>
            <CardProject></CardProject>
            <CardProject></CardProject>
            <CardProject></CardProject>
            <CardProject></CardProject>
            <article className="card-text">
                <p>If you wish to know more projects that I have done. Click the button.</p>
                <ButtonPrimary>More Projects</ButtonPrimary>
            </article>
        </section>
    )
}