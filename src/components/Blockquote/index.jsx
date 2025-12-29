import './Blockquote.css'

export default function Blockquote({paragraphs}){
    return(
        <blockquote className="blockquote">
            {
                paragraphs.map((parapgraph)=>(
                    <p>{parapgraph}</p>
                ))
            }
        </blockquote>
    )
}