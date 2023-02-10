import './ButtonOutline.css'
import { Link } from 'react-router-dom'

export default function ButtonOutline(props) {
    return(
        <Link to="/" className='btn-outline'>
            {props.children}
        </Link>
    )
}