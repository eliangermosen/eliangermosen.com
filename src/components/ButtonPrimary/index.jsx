import './ButtonPrimary.css'
import { Link } from 'react-router-dom'

export default function ButtonPrimary({children, icon, alter, link}) {
    return(
        <Link to={link} className="btn-primary">
            {children}
            <img src={icon} alt={alter} />
        </Link>
    )
}