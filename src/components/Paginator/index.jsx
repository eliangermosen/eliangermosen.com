import './Paginator.css'
import { Link } from 'react-router-dom';
import arrowPrev from '../../assets/icons/arrow-back.svg'
import arrowNext from '../../assets/icons/arrow-next.svg'

export default function Paginator({previous,next}){

    return(
        <div className="container-next-prev">
            <Link to={`/portfolio/${previous}`} style={{visibility: previous ? 'visible' : 'hidden' }} className="link-prev">
                <img src={arrowPrev} alt="Arrow Previous icon" />
                <span className="text-prev" translate="no">{previous}</span>
            </Link>
            <Link to={`/portfolio/${next}`} style={{visibility: next ? 'visible' : 'hidden' }} className="link-next underline">
                <span className="text-next" translate="no">{next}</span>
                <img src={arrowNext} alt="Arrow Next icon" />
            </Link>
        </div>
    )
}