import './Link.css'
import { Link } from 'react-router-dom'

export default function Linq({link, children, icon, alter}){
    return(
        <Link to={link} target="_blank" rel="noopener noreferrer" className="link underline2">
            <p className="p-line" translate="no">
                {children}
            </p>
            {/* {children} */}
            <img src={icon} alt={alter} className="icon" />
        </Link>
    )
}