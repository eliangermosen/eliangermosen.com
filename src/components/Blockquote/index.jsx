import './Blockquote.css'

export default function Blockquote({children}){
    return(
        <blockquote className="blockquote">
            <p>{children}</p>
        </blockquote>
    )
}