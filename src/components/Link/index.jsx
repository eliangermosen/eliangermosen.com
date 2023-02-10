import './Link.css'
import { Link } from 'react-router-dom'

export default function Linq({link, children, icon, alter}){
    return(
        <Link to={link} target="_blank" rel="noopener noreferrer" className="link">
            {children}
            <img src={icon} alt={alter} />
        </Link>
    )
}