import './ButtonOutline.css'
import { Link } from 'react-router-dom'

export default function ButtonOutline({children}) {
    return(
        <a href="mailto:elianmtoribio@gmail.com" target="_blank" rel="noopener noreferrer" className='btn-outline'>
            {children}
        </a>
    )
}