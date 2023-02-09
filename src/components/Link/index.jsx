import './Link.css'

export default function Link({link, children, icon, alter}){
    return(
        <a href={link} target="_blank" rel="noopener noreferrer" className="link">
            {children}
            <img src={icon} alt={alter} />
        </a>
    )
}