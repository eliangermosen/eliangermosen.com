import './CardProject.css';
import { Link } from 'react-router-dom';
import Chip from '../Chip';
import cover from '../../assets/images/Projects/TvShow/Detail.webp';

export default function CardProject() {
    return(
        <article className="card">
            <figure className="fig-card">
                <img src={cover} alt="Cover TvShow project" />
            </figure>
            <h3 className="m-0">TvShow</h3>
            <div className="footer-card">
                <Chip>HTML + CSS</Chip>
                <Chip>JavaScript</Chip>
                <Link to="/" className="f-center">
                    See
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3 17.275C13.1 17.075 13.004 16.8333 13.012 16.55C13.0207 16.2667 13.125 16.025 13.325 15.825L16.15 13H5C4.71667 13 4.479 12.904 4.287 12.712C4.09567 12.5207 4 12.2833 4 12C4 11.7167 4.09567 11.479 4.287 11.287C4.479 11.0957 4.71667 11 5 11H16.15L13.3 8.14999C13.1 7.94999 13 7.71232 13 7.43699C13 7.16232 13.1 6.92499 13.3 6.72499C13.5 6.52499 13.7377 6.42499 14.013 6.42499C14.2877 6.42499 14.525 6.52499 14.725 6.72499L19.3 11.3C19.4 11.4 19.471 11.5083 19.513 11.625C19.5543 11.7417 19.575 11.8667 19.575 12C19.575 12.1333 19.5543 12.2583 19.513 12.375C19.471 12.4917 19.4 12.6 19.3 12.7L14.7 17.3C14.5167 17.4833 14.2877 17.575 14.013 17.575C13.7377 17.575 13.5 17.475 13.3 17.275Z" fill="#EEEEEE"/>
                    </svg>
                </Link>
            </div>
        </article>
    )
}