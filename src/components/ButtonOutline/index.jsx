import './ButtonOutline.css'

export default function ButtonOutline(props) {
    return(
        <a href="/" className='btn-outline'>
            {props.children}
        </a>
    )
}