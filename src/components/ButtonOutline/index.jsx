import './ButtonOutline.css'
import { Link } from 'react-router-dom'

export default function ButtonOutline({children, type, icon, alter, link}) {
    if(type === 'Btn'){
        return(
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn-outline">
                {children}
            </a>
        )
    } else if(type === 'BtnIcon'){
        return(
            <a href={link}  target="_blank" rel="noopener noreferrer" className="btn-outline">
                {children}
                <img src={icon} alt={alter} />
            </a>
        )
    } else{
        <Link to={link} className="btn-outline">
            {children}
        </Link>
    }
}