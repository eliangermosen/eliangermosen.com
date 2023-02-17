import './ButtonPrimary.css'
import { Link } from 'react-router-dom'

export default function ButtonPrimary({children, icon, alter, link, anchor}) {
    return link
    ? <Link to={link} className="btn-primary">
            {children}
            <img src={icon} alt={alter} />
        </Link>
        : <a href={anchor} target="_blank" rel="noopener noreferrer" className="btn-primary">
                {children}
                <img src={icon} alt={alter} />
            </a>
}